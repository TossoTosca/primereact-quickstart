'use client'
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {Card} from "primereact/card";
import { Password } from "primereact/password";

export default function LoginAdmmin() {
    const [form,setForm] = useState({
      id:"",
      password:""
    })

    const onClickSubmit = () => {
      console.log(form)
    }

    return (
        <>
        <div className="main-wrapper">
            <div className="main-container">
                    <Card title="Login to Link Mapper" className="w-20 flex justify-content-center">
                        <Card className="formgrid grid">
                            <div className="field">
                            <div>
                                <label htmlFor="id">Username</label>
                            </div>
                            <InputText id="id" value={form.id} onChange={(e) =>
                                setForm({ ...form, id: e.target.value })
                            } />
                            </div>
                            <div className="field">
                            <div>
                                <label htmlFor="password">Password</label>
                            </div>
                            <Password inputId="password" placeholder="Password" toggleMask className="w-full mb-5" required feedback={false} onChange={(e) => setForm({ ...form, password: e.target.value })} inputClassName="w-full p-3 md:w-30rem"></Password>
                            </div>
                            <div className="field mt-2">
                            <Button onClick={onClickSubmit} label="Login"/>
                            </div>
                        </Card>
                    </Card>
            </div>
        </div>
        </>
    );
  }
  