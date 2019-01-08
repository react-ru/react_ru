import { endpointBase } from "../../constants/endpointBase";
import { chatId } from "../../constants/chatId";
import useFetch from "fetch-suspense";

export const LoadMembersCount = () => {
  const { members_count } = useFetch(
    `${endpointBase}/api/members_count?chat_id=${chatId}`
  );
  return members_count;
};
