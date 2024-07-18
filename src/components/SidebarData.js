import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as PiIcons from 'react-icons/pi'
import * as LiaIcons from 'react-icons/lia';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/home/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/home/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All products',
        path: '/products/insightallproducts',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All productsList',
        path: '/products/insightallproductsList',
        icon: <IoIcons.IoIosPaper />
      },
      // {
      //   title: 'ShowProduct',
      //   path: '/products/product/:productName',
      //   icon: <IoIcons.IoIosPaper />
      // },
      {
        title: 'Add product',
        path: '/products/addproduct',
        icon: < VscIcons.VscSaveAs />
      }
    ]
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <PiIcons.PiUsersThreeFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Search customer',
        path: '/customers/insight',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add customer',
        path: '/customers/post',
        icon: < VscIcons.VscSaveAs />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <LiaIcons.LiaFileInvoiceDollarSolid />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New order',
        path: '/orders/post',
        icon: < VscIcons.VscSaveAs />,
      },
      {
        title: 'all orders',
        path: '/orders/insight',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Search order',
        path: '/orders/insight/id',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Search orders with product',
        path: '/orders/insight/product',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Search orders from customer',
        path: '/orders/insight/customer',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  } ,
  {
    title: 'Invoice',
    path: '/invoices',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Download invoice',
        path: '/invoices/id',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Download invoices customer',
        path: '/invoices/customer',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Download invoices date',
        path: '/invoices/date',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  } ,
  {
    title: 'Image',
    path: '/images',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Beheer',
    path: '/usersemployees/roles',
    icon: <IoIcons.IoMdHelpCircle />
}
]