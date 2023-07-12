import * as React from "react";
import { Children, Fragment, cloneElement, memo } from "react";
import BookIcon from "@mui/icons-material/Book";
import { makeStyles } from "@mui/styles";
import {
  BulkDeleteButton,
  BulkExportButton,
  Datagrid,
  downloadCSV,
  EditButton,
  Filter,
  List,
  SearchInput,
  ShowButton,
  TextField,
  DateField,
  NumberField,
  TopToolbar,
  ImageField,
} from "react-admin"; // eslint-disable-line import/no-unresolved
import ResetViewsButton from "./ResetViewsButton";

import { ImportButton } from "react-admin-import-csv";
import { CreateButton } from "ra-ui-materialui";
import { unparse as convertToCSV } from "papaparse/papaparse.min";

export const PostIcon = BookIcon;

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title[like]" alwaysOn />
  </Filter>
);

const exporter = (posts) => {
  const postsForExport = posts.map((post) => {
    const { backlinks, author, ...postForExport } = post; // omit backlinks and author
    postForExport.author_name = post.author; // add a field
    return postForExport;
  });
  const csv = convertToCSV({
    data: postsForExport,
    fields: [
      "id",
      "title",
      "price",
      "description",
      "category",
      "image",
      "date",
    ], // order fields in the export
  });
  downloadCSV(csv, "posts"); // download as 'posts.csv` file
};

const useStyles = makeStyles((theme) => ({
  title: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  image: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  hiddenOnSmallScreens: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  publishedAt: { fontStyle: "italic" },
}));

const PostListBulkActions = memo((props) => (
  <Fragment>
    <ResetViewsButton {...props} />
    <BulkDeleteButton {...props} />
    <BulkExportButton {...props} />
  </Fragment>
));

const usePostListActionToolbarStyles = makeStyles({
  toolbar: {
    alignItems: "center",
    display: "flex",
    marginTop: -1,
    marginBottom: -1,
  },
});

const PostListActionToolbar = ({ children, ...props }) => {
  const classes = usePostListActionToolbarStyles();
  return (
    <div className={classes.toolbar}>
      {Children.map(children, (button) => cloneElement(button, props))}
    </div>
  );
};
const ListActions = (props) => {
  const { className, basePath, total, resource, currentSort, exporter } = props;
  const config = {
    logging: true,
    validateRow: async (row) => {
      if (row.id) {
        // throw new Error("AAAA");
      }
    },
    postCommitCallback: (reportItems) => {
      console.log("reportItems", { reportItems });
    },
    // disableImportNew: true,
    // disableImportOverwrite: true,
    // disableGetMany: true,
  };
  return (
    <TopToolbar className={className}>
      <CreateButton basePath={basePath} />
      <BulkExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        exporter={exporter}
      />
      <ImportButton
        {...props}
        {...config}
        parseConfig={{ dynamicTyping: true }}
      />
    </TopToolbar>
  );
};

const rowClick = (record) => {
  if (record.commentable) {
    return "edit";
  }

  return "show";
};

const PostList = (props) => {
  const classes = useStyles();

  return (
    <List
      {...props}
      bulkActionButtons={<PostListBulkActions />}
      filters={<PostFilter />}
      actions={<ListActions />}
      exporter={exporter}
    >
      <Datagrid rowClick={rowClick} optimized>
        <TextField source="id" />
        <TextField source="title" cellClassName={classes.title} />
        <NumberField source="price" />
        <TextField source="description" />
        <TextField source="category" />
        <ImageField
          source="image"
          title="title"
          cellClassName={classes.image}
        />
        <DateField source="date" />
        <PostListActionToolbar>
          <EditButton />
          <ShowButton />
        </PostListActionToolbar>
      </Datagrid>
    </List>
  );
};

export default PostList;
