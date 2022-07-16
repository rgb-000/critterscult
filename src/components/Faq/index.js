import data from './data';
import { useState }  from 'react'
import Questions from './Questions';
function Faq() {
    const [questions] = useState(data);
    return (
        <main>
            <div className='container'>


                <h3>Frequently Asked Questions</h3>

                <div className='info'>
                    {questions.map((question) => {
                        return <Questions key={question.id} {...question} />
                    })}
                </div>


            </div>
        </main>
    );
}

export default Faq;