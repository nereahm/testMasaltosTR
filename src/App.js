import React from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
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
        let result;
        switch (maxAnswer) {
            case 'a':
                result = "Businessman of the Year";
                break;
            case 'b':
                result = "Sport";
                break;
            case 'c':
                result = "Perfect Groom";
                break;
            case 'd':
                result = "Nice man";
                break;
            case 'e':
                result = "Family Man";
                break;
            case 'f':
                result = "Party man";
                break;
        }

        // Muestra el resultado en el pop-up
        document.getElementById("resultText").textContent = "Tarzın: " + result;
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
        <label><input type="radio" name="q3" value="d" /> Sosyal buluşmalar, akşam yemekleri ve arkadaşlarla dışarı çıkma.</label>
        <label><input type="radio" name="q3" value="e" /> Aile etkinlikleri, toplanmalar ve evde akşam yemekleri.</label>
        <label><input type="radio" name="q3" value="f" /> Konserler, kulüpler ve gece hayatı etkinlikleri.</label>
    </div>

    {/* Soru 4 */}
    <div className="question">
        <p>4. Kıyafet seçerken sizin için en önemli olan nedir?</p>
        <label><input type="radio" name="q4" value="a" /> Profesyonel bir izlenim ve şıklık.</label>
        <label><input type="radio" name="q4" value="b" /> Rahatlık ve aktivitelerde performans.</label>
        <label><input type="radio" name="q4" value="c" /> Özel günler için tarz ve etki.</label>
        <label><input type="radio" name="q4" value="d" /> Farklı sosyal durumlar için çok yönlülük.</label>
        <label><input type="radio" name="q4" value="e" /> Gündelik yaşamda rahatlık ve rahat bir görünüm.</label>
        <label><input type="radio" name="q4" value="f" /> Öne çıkma yeteneği.</label>
    </div>

    {/* Soru 5 */}
    <div className="question">
        <p>5. Kendinizi en güvende ne zaman hissedersiniz?</p>
        <label><input type="radio" name="q5" value="a" /> Güçlü ve özgüvenli bir profesyonel görünümle.</label>
        <label><input type="radio" name="q5" value="b" /> Hareket özgürlüğü ve işlevsellik sunan kıyafetlerle.</label>
        <label><input type="radio" name="q5" value="c" /> Özel etkinliklerde parlayacak zarif bir tarzla.</label>
        <label><input type="radio" name="q5" value="d" /> Sosyal ortamlarda öne çıkmanıza yardımcı olacak bir kıyafetle.</label>
        <label><input type="radio" name="q5" value="e" /> Aile zamanlarında rahat ve konforlu bir tarzla.</label>
        <label><input type="radio" name="q5" value="f" /> Gece hayatında parlamanızı sağlayacak trend kıyafetlerle.</label>
    </div>

    <button type="button" onClick={calculateResult}>Gönder</button>
</form>


            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText"></p>
                    <button className="close-button" onClick={closeModal}>Kapat</button>
                </div>
            </div>
        </div>
    );
}

export default App;
