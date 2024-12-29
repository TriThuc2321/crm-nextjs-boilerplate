import type { ButtonProps } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const MyButton = (props: ButtonProps) => {
  return <Button color="primary" {...props} />;
};

export default MyButton;
