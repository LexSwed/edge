import { isServer } from '../@utils';

const events = [
  'mousemove',
  'mousedown',
  'mouseup',
  'pointermove',
  'pointerdown',
  'pointerup',
  'touchmove',
  'touchstart',
  'touchend',
];

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @see https://github.com/WICG/focus-visible
 */
export function applyFocusVisiblePolyfill() {
  if (isServer) {
    return;
  }

  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  let hadFocusVisibleRecentlyTimeout: number;

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e: KeyboardEvent) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (document.activeElement && isValidFocusTarget(document.activeElement)) {
      addFocusVisible(document.activeElement);
    }

    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {PointerEvent} e
   */
  function onPointerDown() {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e: FocusEvent) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent) {
      addFocusVisible(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e: FocusEvent) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (isFocused(e.target)) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisible(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    events.forEach((ev) => document.addEventListener(ev, onInitialPointerMove));
  }

  function removeInitialPointerMoveListeners() {
    events.forEach((ev) => document.removeEventListener(ev, onInitialPointerMove));
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e: Event) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if ((e.target as Element)?.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);

  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);

  return () => {
    removeInitialPointerMoveListeners();
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('mousedown', onPointerDown);
    document.removeEventListener('pointerdown', onPointerDown);
    document.removeEventListener('touchstart', onPointerDown);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    document.removeEventListener('focus', onFocus);
    document.removeEventListener('blur', onBlur);
  };
}

/**
 * Helper function for legacy browsers and iframes which sometimes focus
 * elements like document, body, and non-interactive SVG.
 * @param {Element} el
 */
function isValidFocusTarget(el: Element | EventTarget | null) {
  return (
    el &&
    el !== document &&
    (el as Element).nodeName !== 'HTML' &&
    (el as Element).nodeName !== 'BODY' &&
    'setAttribute' in el
  );
}

// const inputTypesWhitelist = {
//   'text': true,
//   'search': true,
//   'url': true,
//   'tel': true,
//   'email': true,
//   'password': true,
//   'number': true,
//   'date': true,
//   'month': true,
//   'week': true,
//   'time': true,
//   'datetime': true,
//   'datetime-local': true,
// };
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} el
 * @return {boolean}
 */
// function focusTriggersKeyboardModality(el: HTMLFormElement) {
//   let type: keyof typeof inputTypesWhitelist = el.type;
//   let tagName = el.tagName;

//   if (tagName === 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {
//     return true;
//   }

//   if (tagName === 'TEXTAREA' && !el.readOnly) {
//     return true;
//   }

//   if (el.isContentEditable) {
//     return true;
//   }

//   return false;
// }

/**
 * Add the `focus-visible` class to the given element if it was not added by
 * the author.
 * @param {Element} el
 */
function addFocusVisible(el: Element | EventTarget | null) {
  (el as Element)?.setAttribute('data-focus-visible', '');
}
/**
 * Remove the `focus-visible` class from the given element if it was not
 * originally added by the author.
 * @param {Element} el
 */
function removeFocusVisible(el: Element | EventTarget | null) {
  (el as Element)?.removeAttribute('data-focus-visible');
}
function isFocused(el: Element | EventTarget | null) {
  return (el as Element)?.getAttribute('data-focus-visible') !== undefined;
}
