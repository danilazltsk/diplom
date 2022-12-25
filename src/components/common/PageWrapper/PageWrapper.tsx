import React, {FC, useMemo} from 'react';
import {useLocation} from "react-router-dom";
import {PageProps} from "../../../types/page";
import {WithChildren} from "../../../types/withChildren";

import styles from "./PageWrapper.module.css"
import Header from "../Header/Header";
import {useSelector} from "react-redux";

import {ThemeVariant, useTheme} from "../../../context/ThemeContext";

const PageWrapper: FC<WithChildren> = ({children}) => {

    const {theme} = useTheme()


    return (
            <div className={`${styles.pageWrapper}
                ${theme === ThemeVariant.light ? styles.lightPageWrapper : styles.darkPageWrapper}`}>
                {children}
            </div>
    );
};

export default PageWrapper;