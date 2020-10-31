import React from "react"
import { Card, CardGroup, Nav } from "react-bootstrap"

export const Kontakt = () => {
    return(
        <div id="kontakt">
            <h3>Kafe Leonardo</h3>
            <Card>
                <Card.Body>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                {/* <Card.Title>Kontakt</Card.Title> */}
                                <Card.Text>
                                    <h2>Linkovi</h2>
                                    <Nav.Link href="/index.html">Početna</Nav.Link>
                                    <Nav.Link href="#galerija">Galerija</Nav.Link>
                                    <Nav.Link href="#meni">Meni</Nav.Link>
                                    <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                {/* <Card.Title>Kontakt</Card.Title> */}
                                <Card.Text>
                                <h2>Radno vreme</h2>
                                    <p>Ponedeljak - Petak 00.00 - 00.00</p>
                                    <p>Vikend 00.00 - 00.00</p>
                                    <h2>Kontakt</h2>
                                    <p>Bilijeva</p>
                                    <p>tel: +381 60 92 29 292</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        <Card>
                            <Card>
                                <div class="mapa">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4146.080189707594!2d20.421615971328727!3d44.783697551821405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1603135990551!5m2!1ssr!2srs" 
                                    // width="300" 
                                    // height="200" 
                                    frameborder="0" 
                                    style={{border:0}} 
                                    allowfullscreen="" 
                                    aria-hidden="false" 
                                    tabindex="0"></iframe>
                                </div>
                            </Card>
                        </Card>
                    </CardGroup>
                </Card.Body>
            </Card>
        </div>
    )
}