import React, { useEffect } from 'react';
import { useState } from "react";
import { ClipLoader, GridLoader, PuffLoader } from 'react-spinners';
import { css } from "@emotion/react";
import './Loading.css'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width:100px;
`;
const Loading = () => {
    let [loading, setLoading] = useState(true);
    return (
        <div className='spinner'>
            <PuffLoader
                color={'#0C0D0D'} loading={loading} css={override} size={100} />
        </div>

    );
}
export default Loading;