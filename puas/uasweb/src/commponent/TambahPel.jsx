import React, { Fragment } from 'react';
import axios from 'axios';
import qs from "querystring";
import { Container, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { useState } from 'react';
import{Link} from 'react-router-dom'

const api = 'http://localhost:3002'

function TambahPel() {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        nama: "",
        no_hp: "",
        alamat: "",
        isSubmitting: false,
        errorMessage: null,
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            nama: data.nama,
            no_hp: data.no_hp,
            alamat: data.alamat,
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(api + '/tambah', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "TAMBAH",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }

                throw res
            })
    }

    return (
        <Fragment>
            <Container>
                <hr />
                <Col>
                    <h1>Form Tambah pellanggan</h1>
                    <hr />
                    <Form onSubmit={handleFormSubmit}>
                        <FormGroup>
                            <Label for="exampleNama">Nama pelanggan</Label>
                            <Input type="text"
                                value={data.nama}
                                onChange={handleInputChange}
                                name="nama" id="exampleNama"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="no_hp">no hp</Label>
                            <Input type="text"
                                value={data.no_hp}
                                onChange={handleInputChange}
                                name="no_hp" id="no_hp"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplealamat">alamat</Label>
                            <Input type="text"
                                value={data.alamat}
                                onChange={handleInputChange}
                                name="alamat" id="examplealamat"
                                placeholder="" />
                        </FormGroup>

                        {data.errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {data.errorMessage}
                            </div>
                        )}

                        <Button disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "..Loading"
                            ) :
                                ( 
                                    "Submit"
                                )
                            }
                        </Button>
                        <Button  outline color="primary"size="sm" >
                    <Link to="/pelanggan">kembali</Link>  </Button>
                    </Form>
                </Col>
            </Container>
        </Fragment>
    );
}

export default TambahPel;