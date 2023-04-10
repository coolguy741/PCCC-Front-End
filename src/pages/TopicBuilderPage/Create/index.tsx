import { useMatch } from "react-router-dom";

import { TopicCreateForm } from "../../../components/TopicBuilder/CreateForms";

export const TopicCreatePage = () => {
  const createRoute = useMatch("/dashboard/topics/create/:slug");
  const editRoute = useMatch("/dashboard/topics/:id/:slug/edit");
  const tab = (createRoute ?? editRoute)?.params.slug ?? "topic";
  const topicId = editRoute?.params.id
    ? parseInt(editRoute?.params.id)
    : undefined;

  return (
    <div>
      <TopicCreateForm tab={tab} topicId={topicId} isEdit={!!editRoute} />
    </div>
  );
};
