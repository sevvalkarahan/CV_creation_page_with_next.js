"use client";
import { useEffect, useState } from "react";

const CreateCV = () => {
  const [mounted, setMounted] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [eduDate, setEduDate] = useState("");
  const [eduEndDate, setEduEndDate] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);
  const [onRequest, setOnRequest] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      isOngoing: false,
      description: "",
    },
  ]);
  const [certificates, setCertificates] = useState([
    {
      name: "",
      institution: "",
      date: "",
    }
  ]);
  const [skills, setSkills] = useState([
    {
      name: "",
    }
  ]);
  const [languages, setLanguages] = useState([
    {
      name: "",
    }
  ]);
  const [referances, setReferances] = useState([
    {
      name: "",
      contact: "",
    }
  ]);


  const [cvData, setCvData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    adress: "",
    linkedin: "",
    github: "",
    webLink: "",
    about: "",
    education: "",
    school: "",
  });

  const downloadPDF = async () => {
    if (typeof window === "undefined") return;

    const html2pdf = (await import("html2pdf.js")).default;

    const element = document.getElementById("cv");

    html2pdf()
      .set({
        margin: [15, 0, 20, 0],
        filename: "cv.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true,
          scrollY: 0,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: {
          mode: ["css", "legacy"],
        }
      })
      .from(element)
      .save();
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        isOngoing: false,
        description: "",
      },
    ]);
  };

  const addLanguage = () => {
    setLanguages([
      ...languages,
      {
        name: "",
      }
    ]);
  };

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        name: "",
        institution: "",
        date: "",
      }
    ]);
  }
  const addSkill = () => {
    setSkills([
      ...skills,
      {
        name: "",
      }
    ]);
  }
  const addReferance = () => {
    setReferances([
      ...referances,
      {
        name: "",
        contact: "",
      }
    ]);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;



  return (

    <div className="w-full flex flex-col lg:flex-row gap-8 justify-center items-start lg:justify-evenly">

      {/* FORM */}
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">CV Bilgileri</h2>



        {/* FOTO */}

        <label className="flex items-center gap-4 cursor-pointer">
          <div className="w-24 h-32 border-2 border-dashed rounded-lg flex items-center justify-center text-sm text-gray-400 hover:border-gray-400 transition">
            Fotoğraf
          </div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              setPhoto(URL.createObjectURL(e.target.files[0]))
            }
          />
        </label>

        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Ad Soyad"
          onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
        />
        <input className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Pozisyon"
          onChange={(e) => setCvData({ ...cvData, title: e.target.value })}
        />
        <input type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="E-posta"
          onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
        />

        <input type="tel" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Telefon"
          onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
        />
        <input className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Adres"
          onChange={(e) => setCvData({ ...cvData, adress: e.target.value })}
        />
        <input type="url" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="LinkedIn"
          onChange={(e) => setCvData({ ...cvData, linkedin: e.target.value })}
        />
        <input type="url" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="GitHub"
          onChange={(e) => setCvData({ ...cvData, github: e.target.value })}
        />
        <input type="url" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Web Link"
          onChange={(e) => setCvData({ ...cvData, webLink: e.target.value })}
        />
        <textarea className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Hakkımda"
          onChange={(e) => setCvData({ ...cvData, about: e.target.value })}
        />
        <div className="w-full bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <h3 className="font-semibold text-gray-700 mb-2">Eğitim</h3>
          <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Bölüm"

            onChange={(e) => setCvData({ ...cvData, education: e.target.value })}
          />
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Okul Adı"
            onChange={(e) => setCvData({ ...cvData, school: e.target.value })}

          />
          <p className="mb-2">Başlangıç / Bitiş Tarihi</p>
          <input
            type="month"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            onChange={(e) => setEduDate(e.target.value)}
          />
          <input
            type="month"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            disabled={isOngoing}
            onChange={(e) => setEduEndDate(e.target.value)}
          />
          <br />
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="accent-slate-600"
              checked={isOngoing}
              onChange={(e) => {
                setIsOngoing(e.target.checked);
                setEduEndDate(e.target.checked ? "Halen devam ediyor" : "");
              }}
            />
            Halen devam ediyor
          </label>
        </div>


        <div className="w-full bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <h3 className="font-semibold text-gray-700">Deneyim</h3>

          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 p-3 rounded space-y-2">

              <input
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Şirket Adı"
                value={exp.company}
                onChange={(e) => {
                  const newExp = [...experiences];
                  newExp[index].company = e.target.value;
                  setExperiences(newExp);
                }}
              />

              <input
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Pozisyon"
                value={exp.position}
                onChange={(e) => {
                  const newExp = [...experiences];
                  newExp[index].position = e.target.value;
                  setExperiences(newExp);
                }}
              />

              <div className="flex gap-2">
                <input
                  type="month"
                  className="bg-gray-50 border border-gray-200 p-2 rounded w-1/2"
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index].startDate = e.target.value;
                    setExperiences(newExp);
                  }}
                />
                <input
                  type="month"
                  className="bg-gray-50 border border-gray-200 p-2 rounded w-1/2"
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index].endDate = e.target.value;
                    setExperiences(newExp);
                  }}
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  className="accent-slate-600"
                  type="checkbox"
                  checked={exp.isOngoing}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index].isOngoing = e.target.checked;
                    newExp[index].endDate = e.target.checked
                      ? "Hâlen devam ediyor"
                      : "";
                    setExperiences(newExp);
                  }}
                />
                Hâlen devam ediyor
              </label>

              <textarea
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Açıklama"
                value={exp.description}
                onChange={(e) => {
                  const newExp = [...experiences];
                  newExp[index].description = e.target.value;
                  setExperiences(newExp);
                }}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addExperience}
            className="w-full py-2 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            + Deneyim Ekle
          </button>
        </div>

        <div className="w-full bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <h3 className="font-semibold text-gray-700">Sertifikalar</h3>
          {
            certificates.map((cert, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-3 rounded space-y-2">
                <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Sertifika adı"
                  value={cert.name}
                  onChange={(e) => {
                    const newCert = [...certificates];
                    newCert[index].name = e.target.value;
                    setCertificates(newCert);
                  }
                  }
                />
                <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Kurum"
                  value={cert.institution}
                  onChange={(e) => {
                    const newCert = [...certificates];
                    newCert[index].institution = e.target.value;
                    setCertificates(newCert);
                  }
                  }
                />
                <input type="month" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Tarih"
                  value={cert.date}
                  onChange={(e) => {
                    const newCert = [...certificates];
                    newCert[index].date = e.target.value;
                    setCertificates(newCert);
                  }
                  }

                />
              </div>
            ))
          }
          <button
            type="button"
            onClick={addCertificate}
            className="w-full py-2 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            + Sertifika Ekle
          </button>
        </div>


        <div className="w-full bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <h3 className="font-semibold text-gray-700">Yetenekler</h3>
          {
            skills.map((skill, index) => (
              <input key={index} type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Yetenekler"
                value={skill.name}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index].name = e.target.value;
                  setSkills(newSkills);
                }
                }
              />

            ))

          }
          <button
            type="button"
            onClick={addSkill}
            className="w-full py-2 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            + Yetenek Ekle
          </button>
        </div>

        <div className="w-full bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <h3 className="font-semibold text-gray-700">Diller</h3>

          {
            languages.map((language, index) => (
              <input
                key={index}
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Diller"
                value={language.name}
                onChange={(e) => {
                  const newLanguages = [...languages];
                  newLanguages[index].name = e.target.value;
                  setLanguages(newLanguages);
                }
                }
              />

            )
            )
          }
          <button
            type="button"
            onClick={addLanguage}
            className="w-full py-2 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            + Dil Ekle
          </button>
        </div>

        <div className="w-full bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <h3 className="font-semibold text-gray-700">Referanslar</h3>
          {
            referances.map((referance, index) => (
              <div key={index} className="space-y-2">
                <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="İsim"
                  value={referance.name}
                  onChange={(e) => {
                    const newReferances = [...referances];
                    newReferances[index].name = e.target.value;
                    setReferances(newReferances);
                  }
                  }
                />
                <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="İletişim"
                  value={referance.contact}
                  onChange={(e) => {
                    const newReferances = [...referances];
                    newReferances[index].contact = e.target.value;
                    setReferances(newReferances);
                  }
                  }
                />
              </div>
            ))
          }
          <button
            type="button"
            onClick={addReferance}
            disabled={onRequest}
            className={`w-full p-2 rounded-lg ${onRequest
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "border border-dashed border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              }`}
          >
            + Referans Ekle
          </button>
          <label className="text-sm italic">
            <input type="checkbox" className="mr-2"
              checked={onRequest}
              onChange={(e) => setOnRequest(e.target.checked)}
            />
            Referanslar istek üzerine sağlanacaktır.

          </label>

        </div>





        <button
          type="button"
          onClick={downloadPDF}
          className="w-full py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-900 transition font-medium"
        >
          PDF İndir
        </button>
      </div>

      {/* CV PREVIEW */}
      <div className="w-full lg:w-1/2 relative flex justify-center">
        <div className="lg:sticky lg:top-6">
          <div id="cv" style={{ width: "200mm", minHeight: "287mm", padding: "0mm 5mm 0mm 15mm", backgroundColor: 'white', fontFamily: 'Times New Roman', fontSize: '9pt' }}>
            <div className="flex w-full h-32 mt-0 mb-2" style={{ backgroundColor: '#334155', color: 'white' }}>

              <div>
                {photo && (
                  <img
                    src={photo}
                    alt="profile"
                    className="w-28 h-32 object-cover mr-10"
                  />
                )}
              </div>
              <div className="flex flex-col items-center justify-center ml-5">
                <h1 className="text-3xl font-bold">{cvData.name}</h1>
                <p className="mb-4 italic">{cvData.title}</p>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-lg my-2" style={{ color: '#303846' }}>Personal Information</h1>
              <hr style={{ color: '#90a1b9' }} />
              <div>
                <div>
                  {cvData.email && (
                    <div>
                      <p className="inline-block w-44" style={{ color: '#303846' }}>E-posta adresi</p>
                      <span>{cvData.email}</span>
                    </div>
                  )}
                  {cvData.phone && (
                    <div>
                      <p className="inline-block w-44 " style={{ color: '#303846' }}>Telefon numarası</p>
                      <span>{cvData.phone}</span>
                    </div>
                  )}
                  {cvData.adress && (
                    <div>
                      <p className="inline-block w-44 " style={{ color: '#303846' }}>Adres</p>
                      <span>{cvData.adress}</span>
                    </div>
                  )}
                  {cvData.linkedin && (
                    <div>
                      <p className="inline-block w-44" style={{ color: '#303846' }}>LinkedIn</p>
                      <span>{cvData.linkedin}</span>
                    </div>
                  )}
                  {cvData.github && (
                    <div>
                      <p className="inline-block w-44 " style={{ color: '#303846' }}>GitHub</p>
                      <span>{cvData.github}</span>
                    </div>
                  )}
                  {cvData.webLink && (
                    <div>
                      <p className="inline-block w-44" style={{ color: '#303846' }}>Web Link</p>
                      <span>{cvData.webLink}</span>
                    </div>
                  )}
                </div>

              </div>





            </div>

            {cvData.about && (
              <section className="mb-4">
                <h2 className="font-bold text-sm my-2" style={{ color: '#303846' }}>Summary</h2>
                <hr style={{ color: '#90a1b9' }} />
                <p>{cvData.about}</p>
              </section>
            )}
            {cvData.education && (
              <section className="mb-4">
                <h2 className="font-bold my-2">Education</h2>
                <hr style={{ color: '#90a1b9' }} />
                <div className="flex">
                  <p className="w-44" style={{ color: '#303846' }}>{eduDate} - {eduEndDate}</p>
                  <div className="flex flex-col">
                    <p className="font-bold">{cvData.education}</p>
                    <p>{cvData.school}</p>
                  </div>
                </div>


              </section>
            )}
            {experiences.some(exp => exp.company) && (
              <section className="mb-4">
                <h2 className="font-bold text-sm my-2">Experience</h2>
                <hr style={{ color: '#90a1b9' }} />

                {experiences.map((exp, index) => (
                  exp.company && (
                    <div key={index} className="flex mb-3">
                      <div>
                        <p className="w-44" style={{ color: '#303846' }}>
                          {exp.startDate} - {exp.endDate}
                        </p>
                      </div>

                      <div>
                        <p className="font-bold">{exp.position}</p>
                        <p className="font-bold italic">{exp.company}</p>
                        <p>{exp.description}</p>
                      </div>
                    </div>
                  )
                ))}
              </section>
            )}

            {certificates.some(cert => cert.name) && (
              <section className="mb-4">
                <h2 className="font-bold text-sm my-2">Certificates</h2>
                <hr style={{ color: '#90a1b9' }} />

                {certificates.map((cert, index) => (
                  cert.name && (
                    <div key={index} className="flex mb-3">
                      <div>
                        <p className="w-44" style={{ color: '#303846' }}>
                          {cert.date}
                        </p>
                      </div>

                      <div>
                        <p className="font-bold">{cert.name}</p>
                        <p className="italic">{cert.institution}</p>

                      </div>
                    </div>
                  )
                ))}
              </section>
            )}
            {skills.some(skill => skill.name) && (
              <section className="mb-4">
                <h2 className="font-bold text-sm my-2">Skills</h2>
                <hr style={{ color: '#90a1b9' }} />

                {skills.map((skill, index) => (
                  skill.name && (
                    <div key={index} className="flex mb-3">
                      <ul>
                        <li>{skill.name}</li>
                      </ul>
                    </div>
                  )
                ))}
              </section>
            )}
            {languages.some(lang => lang.name) && (
              <section className="mb-4">
                <h2 className="font-bold text-sm my-2">Languages</h2>
                <hr style={{ color: '#90a1b9' }} />

                {languages.map((lang, index) => (
                  lang.name && (
                    <div key={index} className="flex mb-3">
                      <ul>
                        <li>{lang.name}</li>
                      </ul>
                    </div>
                  )
                ))}
              </section>
            )}



            {onRequest || referances.some(ref => ref.name) ? (
              <section className="mb-4">
                <h2 className="font-bold text-sm my-2">References</h2>
                <hr style={{ color: '#90a1b9' }} />

                {onRequest ? (
                  <p className="italic">
                    Referanslar istek üzerine sağlanacaktır.
                  </p>
                ) : (
                  referances.map((ref, index) =>
                    ref.name ? (
                      <div key={index} className="flex">
                        <p className="font-bold w-44">{ref.name}</p>
                        <p>{ref.contact}</p>
                      </div>
                    ) : null
                  )
                )}
              </section>
            ) : null}


          </div>
        </div>
      </div>


    </div >

  );
};

export default CreateCV;
