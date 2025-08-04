import React from "react";
import myData from "../json/siswa.json"
import Txt from "../Txt/Txt";
import Button from "../Button/Button";
export default function Showdata(prop) {
    var opsi = prop.opsi;
    console.log(prop.select.toUpperCase())
    return (
        <>

                <table className="table table-striped">
                    <thead className=" text-center">
                        <tr>
                            <th>Nama</th>
                            <th>Kelas</th>
                            <th>Jurusan</th>
                            <th>Ekskul</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myData.map((post) => {
                                function pilihOpsi() {
                                    if (opsi == "Ekskul") {
                                        return (post.EKSKUL)
                                    } else if (opsi == "Kelas") {
                                        return (post.KELAS)
                                    } else if (opsi == "Jurusan") {
                                        return (post.JURUSAN)
                                    }

                                }
                                console.log(pilihOpsi())
                                if (pilihOpsi() == prop.select.toUpperCase()) {

                                    return (
                                        <>
                                            <tr>
                                                <td>{post.NAMA} </td>
                                                <td>{post.KELAS}</td>
                                                <td>{post.JURUSAN}</td>
                                                <td>{post.EKSKUL}</td>
                                            </tr>
                                        </>
                                        // console.table(post)
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
        </>
    )
}