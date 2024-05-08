'use client'

import './dashboard.css'
import HeaderAdmin from '../../../component/layout/headerAdmin'
import FooterAdmin from '../../../component/layout/footerAdmin'
export default function DashboardLayout({ children }) {
    return (
        <>
            <HeaderAdmin />
                {children}
            <FooterAdmin />
        </>
    );
}
