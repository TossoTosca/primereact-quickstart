"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import {Card} from "primereact/card";
import { Button } from 'primereact/button';

import { InputText } from "primereact/inputtext";

import "./style.css";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">
          <Card className="w-20">
            <div className="col-12">
              <h1>
              LINK MAPPER
              </h1>
            </div>
            <div className="col-12">
              <InputText></InputText>
              <Button label="Submit"/>
            </div>
            {/* condition later */}
            <div className="col-12">
              <p><b>Maaf data yang anda masukan tidak ada</b></p>
            </div>
          </Card>
          <Card>
            <h3>KETENTUAN</h3>
            <div className='flesx flex-wrap'>
              <p> <i className="pi pi-check"/> Masukan apa yang ingin Anda cari di kolom pencarian</p>
              <p> <i className="pi pi-check"/> Ketik pencarian Anda sesuai (a-z, A-Z)</p>
              <p> <i className="pi pi-check"/> Pastikan tidak menggunakan teks simbol ~!@#$%^&*()</p>
              <p> <i className="pi pi-check"/> Kami tidak menyediakan situs Porno, Darkweb, dan Scammer</p>
            </div>
          </Card>
          <div className="">
            <Button icon="pi pi-arrow-right" label="Navigate to admin page" text onClick={() => router.push('/admin')} />
            <Button icon="pi pi-arrow-right" label="Navigate to login admin page" text onClick={() => router.push('/auth/login')} />
            <Button icon="pi pi-arrow-right" label="Navigate to unauthorized page" text onClick={() => router.push('/auth/error')} />
          </div>
        </div>
        
        <div className="footer">
          <div className="footer-content">
            <a href="" className="license">
              WISH IT DEV
            </a>

            <a className="footer-logo">
              <img src="./icon-primeract.svg" alt="logo" />
            </a>

            <div className="socials">
              <a href="">
                <i className="pi pi-github"></i>
              </a>
              <a href="">
                <i className="pi pi-discord"></i>
              </a>
              <a href="">
                <i className="pi pi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
