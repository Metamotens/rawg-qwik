import { component$ } from "@builder.io/qwik";

export interface SidenavProps {}

export const Sidenav = component$<SidenavProps>((props) => {
  return <aside>Sidenav component works!</aside>;
});
