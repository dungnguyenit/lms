import Footer from 'components/footer';
import Header from 'components/header';
import MenuGroup from 'components/menu';
import { useAppStore } from 'hooks';
import OverlayLoader from 'pages/common/overlay-loader';
import React, { Fragment, ReactElement, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { publicRoutes, RouteProps } from './configs';
import 'antd/dist/antd.css';

const RouteWrapper = ({ ...props }: RouteProps): ReactElement => {
    const navigate = useNavigate();
    const { userManager } = useAppStore();

    useEffect(() => {
        window.scrollTo(0, 0);

        const isLoggedIn = !!userManager.userInfo;

        console.log(isLoggedIn);

        // if (!isLoggedIn && props.needAuth) {
        //     navigate(Paths.login);
        //     return;
        // }
    }, [navigate, props.needAuth, userManager.userInfo]);

    return (
        <Suspense fallback={<OverlayLoader />}>
            <Fragment>
                {props.hasHeader && <Header />}
                {props.menu ? <MenuGroup component={<props.page />} /> : <props.page />}
                {props.hasFooter && <Footer />}
            </Fragment>
        </Suspense>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<RouteWrapper {...route} />}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
