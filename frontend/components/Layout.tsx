import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";

type LayoutProps = {
    children?: ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>フードデリバリーサービス</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                />
            </Head>
            <header>
                <style jsx>
                    {`span{
                          color:white;
                        }`}
                </style>
                <Nav className="navbar navbar-dark bg-dark">
                    <NavItem>
                        <Link href="./">
                            <span className="navbar-brand">ホーム</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/login">
                            <span className="ml-auto nav-link">サインイン</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/register">
                            <span className="nav-link">サインアップ</span>
                        </Link>
                    </NavItem>
                </Nav>
            </header>
            <Container>{props.children}</Container>
        </div>
    );
}

export default Layout;