import React from "react"
import { Table } from "react-bootstrap"

export const Meni = () => {
    return(
        <div id="meni">
            <h3>Meni</h3>
            <div className="text">
            <div className="tabela">    
                <Table hover>
                    <h5>Topli napici</h5>
                    
                    <tbody>
                        <tr>
                            <td>Espreso</td>
                            <td>120 din</td>
                        </tr>
                        <tr>
                            <td>Kapućino</td>
                            <td>150 din</td>
                        </tr>
                        <tr>
                            <td>Domaća kafa</td>
                            <td>120 din</td>
                        </tr>
                        <tr>
                            <td>Čaj</td>
                            <td>120 din</td>
                        </tr>
                        <tr>
                            <td>Topla čokolada</td>
                            <td>150 din</td>
                        </tr>
                    </tbody>
                    <h5>Piva</h5>
                    
                    <tbody>
                    <tr>
                        <td>Zaječarsko pivo 0,33</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Zaječarsko pivo 0,50</td>
                        <td>200 din</td>
                    </tr>
                    <tr>
                        <td>Haineken 0,33</td>
                        <td>180 din</td>
                    </tr>
                    <tr>
                        <td>Haineken 0,50</td>
                        <td>220 din</td>
                    </tr>
                    <tr>
                        <td>Lav 0,50</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Jelen 0,50</td>
                        <td>120 din</td>
                    </tr>
                    </tbody>
                    <h5>Sokovi</h5>
                    
                    <tbody>
                    <tr>
                        <td>Koka Kola 0,25</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Fanta 0,25</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Sprite 0,25</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Kokta 0,25</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Next 0,25</td>
                        <td>200 din</td>
                    </tr>
                    </tbody>
                    <h5>Alkoholna pića</h5>
                    
                    <tbody>
                    <tr>
                        <td>Viski</td>
                        <td>200 din</td>
                    </tr>
                    <tr>
                        <td>Rakija</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Votka</td>
                        <td>150 din</td>
                    </tr>
                    <tr>
                        <td>Konjak</td>
                        <td>200 din</td>
                    </tr>
                    <tr>
                        <td>Tekila</td>
                        <td>200 din</td>
                    </tr>
                    </tbody>
                    <h5>Vina</h5>
                    
                    <tbody>
                    <tr>
                        <td>Flaša</td>
                        <td>1500 din</td>
                    </tr>
                    <tr>
                        <td>Čaša</td>
                        <td>200 din</td>
                    </tr>    
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )
}