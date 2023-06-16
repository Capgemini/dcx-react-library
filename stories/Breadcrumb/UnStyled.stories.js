import { Breadcrumb, BreadcrumbItem } from '../../src/breadcrumb';

export default {
  title: 'DCXLibrary/Breadcrumb/Without style',
  component: Breadcrumb,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function () {
    return (
      <Breadcrumb>
        <BreadcrumbItem> content 1 </BreadcrumbItem>
        <BreadcrumbItem> content 2</BreadcrumbItem>
        <BreadcrumbItem> content 3</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};
