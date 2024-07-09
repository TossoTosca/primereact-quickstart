'use client'
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {Card} from "primereact/card";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Link {
  id:number;
  code:string;
  link:string;
}

export default function AdminPage() {
    const [form,setForm] = useState({
      code:"",
      link:""
    })

    const [links , setLinks] = useState<Link[]>([])
    
    const onClickSubmit = () => {
      console.log(form)
    }

    return (
      <>
      <div className="main-wrapper">
        <div className="main-container">
          <div className="flex">
              <Card className="w-20 flex justify-content-center">
                    <div className="flex col-12">
                      <h1>
                      Admin LINK MAPPER
                      </h1>
                    </div>
                    <div className="flex">
                    <Card className="formgrid grid">
                      <div className="field">
                        <div>
                          <label htmlFor="code">Code</label>
                        </div>
                        <InputText id="code" value={form.code} onChange={(e) =>
                          setForm({ ...form, code: e.target.value })
                        } />
                      </div>
                      <div className="field">
                        <div>
                          <label htmlFor="link">Link</label>
                        </div>
                        <InputText id="link" value={form.link} onChange={(e) =>
                          setForm({ ...form, link: e.target.value })
                        } />
                      </div>
                      <div className="field mt-2">
                        <Button onClick={onClickSubmit} label="Submit"/>
                      </div>
                      </Card>
                    </div>
                  </Card>
                <Card title="All Links">
                    <DataTable value={links} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="code" header="Code"></Column>
                        <Column field="link" header="Links"></Column>
                        <Column field="actions" header="Actions"></Column>
                    </DataTable>
                  </Card>
            </div>
        </div>
      </div>
      </>
    );
  }
  