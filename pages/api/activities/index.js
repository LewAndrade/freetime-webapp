import { Client } from "@notionhq/client";

export default async function handler({ query: { actions } }, res) {
  const notionApiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.DATABASE_ID;

  const notion = new Client({ auth: notionApiKey });
  actions = actions?.split(",");

  const query = {
    database_id: databaseId,
    filter: { property: "Done", checkbox: { equals: false } },
  };

  if (actions?.length > 0) {
    query.filter = {
      and: [
        query.filter,
        {
          or: actions.map((action) => ({
            property: "Action",
            select: { equals: action },
          })),
        },
      ],
    };
  }

  const response = (await notion.databases.query(query)).results;

  const activities = response
    .filter((activity) => activity.properties.Name.title[0]?.plain_text ?? null)
    .map((activity) => ({
      id: activity.id,
      name: activity.properties.Name.title[0]?.plain_text ?? null,
      action: activity.properties.Action.select.name,
    }));

  res.json(activities);
}
