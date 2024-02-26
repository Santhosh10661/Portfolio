import React from "react";
import notesImg1 from "./projectSnap/Notes 1.jpg";
import notesImg2 from "./projectSnap/Notes 2.jpg";
import notesImg3 from "./projectSnap/Notes 3.jpg";
import notesImg4 from "./projectSnap/Notes 4.jpg";
import ImgCarousel from "./projectCarousel";

function Project() {
  let projectList = [
    {
      id: 1,
      title: "notes",
      image: {
        img1: notesImg1,
        img2: notesImg2,
        img3: notesImg3,
        img4: notesImg4,
      },
      shortNote: "",
    },
    {
      id: 2,
      title: "notes",
      image: {
        img1: notesImg1,
        img2: notesImg2,
        img3: notesImg3,
        img4: notesImg4,
      },
      shortNote: "",
    },
  ];

  return (
    <div className="Project">
      <div className="row">
        {projectList.map((pro) => {
          return (
            <div className="col-12 col-sm-4 " key={pro.id}>
              <div
                className="card p-3"
                style={{ background: "#2c3333", color: "#ffffec" }}
              >
                {ImgCarousel(pro.image)}
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
