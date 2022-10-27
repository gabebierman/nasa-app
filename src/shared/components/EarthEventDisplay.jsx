//"Earth" page
//EONET

import React from "react";
import { useGetEarthEventDataQuery } from "../redux/RTKquery/eonetApiSlice";

function EONETDisplay() {
    const { data } = useGetEarthEventDataQuery("2022-02-22");
    return (
        <div>
            EONETDisplay
            <div>
                {data
                    ? ((
                          <>
                              <p>something here</p>
                          </>
                      ),
                      console.log(data))
                    : null}
            </div>
        </div>
    );
}

export default EONETDisplay;
