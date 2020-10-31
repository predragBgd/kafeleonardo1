import React from "react"
import { Card } from "react-bootstrap"
import foto from "./foto/kafe_foto/sank.jpg"

export const PocetnaStrana = () => {
    return(
        <div id="pocetna">
            <Card>
                <Card.Img variant="top" src={foto} />
                <Card.Body>
                    <Card.Title>Kafe Leonardo</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat neque! Quos consequuntur perferendis ipsum nesciunt veniam aperiam modi illo quas explicabo ex reiciendis dolor quidem nihil, ratione eius quaerat ut consectetur, rerum, dolore tempore! Repudiandae porro quam neque architecto illo sunt laudantium rerum aperiam culpa quod esse, est explicabo sequi amet recusandae alias facilis voluptas quasi, ad inventore dolorum magnam dolore ipsa distinctio! Magnam corrupti modi praesentium error quae suscipit eum inventore, ullam architecto sed fugiat tempore consequatur iste ex repellat nihil, mollitia ad odio vitae! Provident voluptates impedit minima, dicta dolores pariatur velit porro magni quidem. Distinctio, amet!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}