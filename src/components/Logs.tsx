import React from 'react';
import { Table } from './Table';


export function Logs() {
    
    return (
        <div className="bg-neutral-500 min-h-screen text-white">
            <div className=" bg-neutral-500 text-center rounded-xl">
                <h1 className="text-2xl font-bold p-6">Logs</h1>
            </div>

            <div className="grid grid-rows-1 justify-items-center bg-neutral-500 min-w-full text-white">
               <Table/>
            </div>
        </div>
    )
}