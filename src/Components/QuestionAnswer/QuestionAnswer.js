import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='question-answer'>

            <div>

                <h1>How React Work...?</h1>

                <p>
                    React works with  diff-algorithm . In a normal application when some data is updated  and need to reload  the web page ... which is a bad thing for user experience  . In React, it take a copy of Browser dom And when something need to  change in Browser dom. Using  diff-algorithm react   only check where change happen and which element newly added.And compare with Virtual dom . If any change react only updates the specific element.
                </p>

            </div>

            <div>
                <h1>Difference between props and state...?</h1>


                <p>
                    By Using Props data can be send /passed form one component to another.Props data is Immutable ,you can not modified in the time or in middle of data floting. Props can be used with state and functional components. Props  data are read-only ,you can't edit any data.

                    On the other hand,state data can be send or passed within the component only.State is mutable ,means you cant modifi it.State can be used only with the state components/class component.And State is both read and write you can easy edit edit it.
                </p>

            </div>

        </div>
    );
};

export default QuestionAnswer;