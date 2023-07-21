import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses, TreeItemProps } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { animated, useSpring } from "@react-spring/web";
import { alpha, styled } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import BasicModalDialogProps from "../app/BasicModalDialogProps";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const jsonData: TreeNode[] = [
  {
    id: 1,
    createdAt: "2023-07-06T16:38:32.719Z",
    updatedAt: "2023-07-06T16:38:32.719Z",
    parentId: 0,
    name: "Erdal Holding",
    type: "UNIT",
    path: "1",
  },
  {
    id: 2,
    createdAt: "2023-07-06T16:38:57.807Z",
    updatedAt: "2023-07-06T16:38:57.807Z",
    parentId: 1,
    name: "Tommy Life",
    type: "UNIT",
    path: "1.1",
  },
  {
    id: 3,
    createdAt: "2023-07-06T16:39:13.111Z",
    updatedAt: "2023-07-06T16:39:13.111Z",
    parentId: 1,
    name: "İsola",
    type: "UNIT",
    path: "1.2",
  },
  {
    id: 4,
    createdAt: "2023-07-06T16:39:20.847Z",
    updatedAt: "2023-07-06T16:39:20.847Z",
    parentId: 1,
    name: "Express",
    type: "UNIT",
    path: "1.3",
  },
  {
    id: 5,
    createdAt: "2023-07-06T16:39:29.158Z",
    updatedAt: "2023-07-06T16:39:29.158Z",
    parentId: 1,
    name: "Modalog",
    type: "UNIT",
    path: "1.4",
  },
  {
    id: 6,
    createdAt: "2023-07-06T16:41:34.154Z",
    updatedAt: "2023-07-06T16:41:34.154Z",
    parentId: 5,
    name: "Müşteri Hizmetleri",
    type: "UNIT",
    path: "1.4.1",
  },
  {
    id: 7,
    createdAt: "2023-07-06T16:41:45.410Z",
    updatedAt: "2023-07-06T16:41:45.410Z",
    parentId: 5,
    name: "Kategori",
    type: "UNIT",
    path: "1.4.2",
  },
  {
    id: 8,
    createdAt: "2023-07-06T16:41:50.416Z",
    updatedAt: "2023-07-06T16:41:50.416Z",
    parentId: 5,
    name: "Yazılım",
    type: "UNIT",
    path: "1.4.3",
  },
];
function MinusSquare(props: SvgIconProps) {
  return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
      <SvgIcon
          className="close"
          fontSize="inherit"
          style={{ width: 14, height: 14 }}
          {...props}
      >
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

// Convert JSON data into a nested tree structure
interface TreeNode {
  id: number;
  parentId: number;
  name: string;
  type: string;
  path: string;
  children?: TreeNode[];
  createdAt: string;
  updatedAt: string;
}

const convertToTree = (data: TreeNode[]): TreeNode[] => {
  const rootItems = data.filter((item) => item.parentId === 0);

  const createTree = (item: TreeNode): TreeNode => {
    const children = data.filter((child) => child.parentId === item.id);
    return {
      ...item,
      children: children.map(createTree),
    };
  };

  return rootItems.map(createTree);
};

const nestedTreeData: TreeNode[] = convertToTree(jsonData);

export default function ChooseHierarchy({
  open,
  close,
}: BasicModalDialogProps) {
  const renderTree = (nodes: TreeNode) => (
    <StyledTreeItem key={nodes.id} nodeId={nodes.path} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => close()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "300px",
            height: "300vh",
          },
        }}
      >
        <DialogContent>
          <TreeView
            aria-label="customized"
            defaultExpanded={["1"]}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
            sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
          >
            {nestedTreeData.map((node) => renderTree(node))}
          </TreeView>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
