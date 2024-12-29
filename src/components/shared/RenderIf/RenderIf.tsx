import type { ReactNode } from 'react';

type RenderIfProps = {
  condition: boolean;
  children: ReactNode;
};
export default function RenderIf({ children, condition }: RenderIfProps) {
  return condition ? children : null;
}
