import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

const OneTimePasswordFieldDemo = () => (
  <OneTimePasswordField.Root className="flex items-center gap-2">
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 md:w-12 h-12 border border-dark-gray rounded-[8px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 md:w-12 h-12 border border-dark-gray rounded-[8px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 md:w-12 h-12 border border-dark-gray rounded-[8px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 md:w-12 h-12 border border-dark-gray rounded-[8px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 md:w-12 h-12 border border-dark-gray rounded-[8px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary" />
    <OneTimePasswordField.Input className="flex items-center py-1.5 px-2.5 w-8.5 md:w-12 h-12 border border-dark-gray rounded-[8px] focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary" />
    <OneTimePasswordField.HiddenInput />
  </OneTimePasswordField.Root>
);

export default OneTimePasswordFieldDemo;
