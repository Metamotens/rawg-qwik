import { $, component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm } from "@modular-forms/qwik";

type SearchForm = {
  search: string;
};

export const SearchForm = component$(() => {
  const nav = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchForm, { Form, Field }] = useForm<SearchForm>({
    loader: useSignal({
      search: "",
    }),
  });

  const handleSubmit = $<SubmitHandler<SearchForm>>(async (values, event) => {
    event.preventDefault();
    if (values.search === "") return;
    await nav(`/search/${values.search}`);
  });

  return (
    <Form onSubmit$={handleSubmit}>
      <Field name="search">
        {(field, props) => (
          <input
            {...props}
            value={field.value}
            type="search"
            placeholder="Search 861,608 games"
            class="block w-full p-3 ps-10 text-sm outline-none text-gray-900 rounded-full bg-[#3b3b3b] hover:bg-white focus:bg-white transition-colors duration-300"
          />
        )}
      </Field>
    </Form>
  );
});
