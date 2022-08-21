// Layouts

// Pages
import CreateUser from 'pages/create-user';
import Login from 'pages/auth/login';
import Blogs from 'pages/user-management/user-management-detail';
import NotFound from 'pages/common/not-found';
import Contract from 'pages/contract';
import Profile from 'pages/profile';
import UserManagement from 'pages/user-management';
import { Paths } from './paths';
import DetailsUser from 'pages/details-user';
import DetailsTest from 'pages/details-test';
export interface RouteProps {
    path: string;
    page: () => JSX.Element;
    hasHeader?: boolean;
    hasFooter?: boolean;
    needAuth?: boolean;
    menu?: boolean;
}

// Public routes
const publicRoutes = [
    //common
    { path: Paths.home, page: Login, hasHeader: true, hasFooter: true,menu: true },
    { path: Paths.any, page: NotFound, menu: true },

    //auth
    // { path: Paths.login, page: Login, hasHeader: true, menu: true },

    //contract
    { path: Paths.contract, page: Contract, hasHeader: true, menu: true },
    { path: Paths.userManagementDetail, page: Blogs, hasHeader: true, hasFooter: true, menu: true },
    { path: Paths.profile, page: Profile, hasHeader: true, menu: true },
    { path: Paths.userManagement, page: UserManagement, hasHeader: true, hasFooter: true, menu: true },
    { path: Paths.createUser, page: CreateUser, hasHeader: true, hasFooter: true, menu: true },
    { path: Paths.detailsUser, page: DetailsUser, hasHeader: true, hasFooter: true, menu: true },
    { path: Paths.detailsTest, page: DetailsTest, hasHeader: true, hasFooter: true, menu: true }

    
] as RouteProps[];

const privateRoutes = [];

export {
    publicRoutes,
    privateRoutes
};
