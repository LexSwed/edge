import React from 'react';
import { Heading, TextLink } from '../../../../src';

const heading = (level: string) => {
  const Component = (props: any) => {
    return !!props.id ? (
      <Heading mb="m" as={level} {...props}>
        <TextLink color="gray.900" href={`#${props.id}`}>
          {props.children}
        </TextLink>
      </Heading>
    ) : (
      <Heading mb="m" {...props} />
    );
  };

  Component.displayName = Heading.displayName;
  return Component;
};

export const h2 = heading('h2');
export const h3 = heading('h3');
export const h4 = heading('h4');
export const h5 = heading('h5');
export const h6 = heading('h6');
