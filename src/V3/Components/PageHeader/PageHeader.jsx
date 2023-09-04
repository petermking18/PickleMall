import React from "react";

import "./PageHeader.scss";

export default function PageHeader({title}) {
    return (
        <div className={"page-header py-4"}>
            <h1 className={"fs-45px fs-md-60px font-barlow-condensed fw-700 text-bright-white text-center my-0"}>
                {title}
            </h1>
        </div>
    )
}