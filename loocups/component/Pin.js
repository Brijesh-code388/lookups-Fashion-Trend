import NextLink from 'next/link'
import React from "react";

function Pin(props) {
  let { id, url } = props;
  return (
    <NextLink href={`/outfitid/${id}`}>

      <div className="pin"  >
        <div className="pin__container">
          <button href={'#'}>
            SAVE
          </button>{
            <img src={url} alt="pin" />
          }
        </div>
      </div >
    </NextLink>
  );
}

export default Pin;
