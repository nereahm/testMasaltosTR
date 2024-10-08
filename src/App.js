import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const [result, setResult] = useState("");
    const [resultImage, setResultImage] = useState("");

    const calculateResult = () => {
        const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
        const form = document.forms["quizForm"];

        // Recorre las preguntas y acumula las respuestas
        for (let i = 1; i <= 5; i++) {
            const selected = form["q" + i].value;
            if (selected) {
                answers[selected]++;
            }
        }

        // Encuentra la respuesta mayoritaria
        let maxAnswer = 'a';
        for (const key in answers) {
            if (answers[key] > answers[maxAnswer]) {
                maxAnswer = key;
            }
        }

        // Define los resultados según la respuesta mayoritaria
        let resultText = "";
        let resultImageUrl = "";
        switch (maxAnswer) {
            case 'a':
                resultText = "Businessman of the Year";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case 'b':
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case 'c':
                resultText = "Perfect Groom";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
                break;
            case 'd':
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case 'e':
                resultText = "Family Man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
                break;
            case 'f':
                resultText = "Party man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
                break;
        }

        // Actualiza el estado con el resultado y la imagen
        setResult(resultText);
        setResultImage(resultImageUrl);

        // Muestra el resultado en el pop-up
        document.getElementById("resultModal").style.display = "flex";
    };

    const closeModal = () => {
        document.getElementById("resultModal").style.display = "none";
    };

    return (
        <div className="quiz-container">
            <h1>Hangi stili arıyorsunuz?</h1>
            <form id="quizForm">
                {/* Soru 1 */}
                <div className="question">
                    <p>1. Boş zamanlarınızda en sevdiğiniz aktivite nedir?</p>
                    <label><input type="radio" name="q1" value="a" /> İş etkinlikleri.</label>
                    <label><input type="radio" name="q1" value="b" /> Spor yapma veya açık hava aktiviteleri.</label>
                    <label><input type="radio" name="q1" value="c" /> Özel etkinliklere hazırlanma.</label>
                    <label><input type="radio" name="q1" value="d" /> Arkadaşlarla dışarı çıkma.</label>
                    <label><input type="radio" name="q1" value="e" /> Aileyle vakit geçirme.</label>
                    <label><input type="radio" name="q1" value="f" /> Partilere katılma.</label>
                </div>

                {/* Soru 2 */}
                <div className="question">
                    <p>2. Moda anlayışınızı nasıl tanımlarsınız?</p>
                    <label><input type="radio" name="q2" value="a" /> Şık ve profesyonel.</label>
                    <label><input type="radio" name="q2" value="b" /> Rahat ve sportif.</label>
                    <label><input type="radio" name="q2" value="c" /> Zarif ve sofistike.</label>
                    <label><input type="radio" name="q2" value="d" /> Çekici ve çok yönlü.</label>
                    <label><input type="radio" name="q2" value="e" /> Rahat ve gündelik.</label>
                    <label><input type="radio" name="q2" value="f" /> Trendleri takip eden.</label>
                </div>

                {/* Soru 3 */}
                <div className="question">
                    <p>3. Hangi tür etkinliklere katılmayı tercih edersiniz?</p>
                    <label><input type="radio" name="q3" value="a" /> Kurumsal etkinlikler.</label>
                    <label><input type="radio" name="q3" value="b" /> Spor müsabakaları.</label>
                    <label><input type="radio" name="q3" value="c" /> Düğünler, yıldönümleri ve kişisel kutlamalar.</label>
                    <label><input type="radio" name="q3" value="d" /> Sosyal toplantılar ve akşam yemekleri.</label>
                    <label><input type="radio" name="q3" value="e" /> Aile etkinlikleri ve evde yemekler.</label>
                    <label><input type="radio" name="q3" value="f" /> Konserler, kulüpler ve gece etkinlikleri.</label>
                </div>

                {/* Soru 4 */}
                <div className="question">
                    <p>4. Kıyafetinizi seçerken en önemli olan nedir?</p>
                    <label><input type="radio" name="q4" value="a" /> Şıklık ve profesyonellik.</label>
                    <label><input type="radio" name="q4" value="b" /> Rahatlık ve performans.</label>
                    <label><input type="radio" name="q4" value="c" /> Özel durumlarda stil ve etki.</label>
                    <label><input type="radio" name="q4" value="d" /> Farklı sosyal durumlara uyum sağlama.</label>
                    <label><input type="radio" name="q4" value="e" /> Günlük rahatlık.</label>
                    <label><input type="radio" name="q4" value="f" /> Gece etkinliklerinde öne çıkma.</label>
                </div>

                {/* Soru 5 */}
                <div className="question">
                    <p>5. Hangi tarzda kendinizi en güvende hissediyorsunuz?</p>
                    <label><input type="radio" name="q5" value="a" /> Güven veren profesyonel bir görünüm.</label>
                    <label><input type="radio" name="q5" value="b" /> Hareket özgürlüğü ve işlevsellik sunan kıyafetler.</label>
                    <label><input type="radio" name="q5" value="c" /> Özel etkinliklerde öne çıkan zarif bir stil.</label>
                    <label><input type="radio" name="q5" value="d" /> Sosyal buluşmalarda parlayan bir görünüm.</label>
                    <label><input type="radio" name="q5" value="e" /> Aile ile geçirdiğiniz zaman için rahat bir stil.</label>
                    <label><input type="radio" name="q5" value="f" /> Gece etkinliklerinde dikkat çekici bir görünüm.</label>
                </div>

                <button type="button" onClick={calculateResult}>Gönder</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Your style is: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={resultImage} alt={result} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default App;
