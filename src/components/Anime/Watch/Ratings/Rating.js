import React from 'react'
import './Ratings.css'

function Rating() {
    return (

            <div class="ratings">
                <input name="ratingRadio" type="radio" id="st1" value="1" />
                <label for="st1"></label>
                <input name="ratingRadio" type="radio" id="st2" value="2" />
                <label for="st2"></label>
                <input name="ratingRadio" type="radio" id="st3" value="3" />
                <label for="st3"></label>
                <input name="ratingRadio" type="radio" id="st4" value="4" />
                <label for="st4"></label>
                <input name="ratingRadio" type="radio" id="st5" value="5" />
                <label for="st5"></label>
            </div>
    )
}

export default Rating
