import { useMatch } from "react-router-dom";
import { ContentBuilder } from "../../../components/ContentBuilder";

export const ThemeCreatePage = () => {
  const createRoute = useMatch("/dashboard/topics/create/:slug");
  const editRoute = useMatch("/dashboard/topics/:id/:slug/edit");
  const tab = (createRoute ?? editRoute)?.params.slug ?? "topic";
  const topicId = editRoute?.params.id
    ? parseInt(editRoute?.params.id)
    : undefined;

  return <ContentBuilder />;
};
