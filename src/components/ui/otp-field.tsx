import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

const OneTimePasswordFieldDemo = () => (
  <OneTimePasswordField.Root className="flex items-center gap-2">
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 h-12 border border-primary rounded-[8px] focus:outline-none focus:ring focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 h-12 border border-primary rounded-[8px] focus:outline-none focus:ring focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 h-12 border border-primary rounded-[8px] focus:outline-none focus:ring focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 h-12 border border-primary rounded-[8px] focus:outline-none focus:ring focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 h-12 border border-primary rounded-[8px] focus:outline-none focus:ring focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 h-12 border border-primary rounded-[8px] focus:outline-none focus:ring focus:ring-primary" />
    <OneTimePasswordField.HiddenInput />
  </OneTimePasswordField.Root>
);

export default OneTimePasswordFieldDemo;
