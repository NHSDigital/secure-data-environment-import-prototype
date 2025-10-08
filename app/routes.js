// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to '/magical-powers-answer'
router.post('/upload-type-answer', function (req, res) {

  // Make a variable and give it the value from 'hasSymptoms'
  const datatype = req.session.data.dataType

  // Check whether the variable matches a condition
  if (datatype == "Reference data") {

    // Send user to next page
    res.redirect('import-start-page')
  }
  else if (datatypes == "Code || datatype == "Code") {

    // Send user to ineligible page
    res.redirect('/import-portal')
  }
  else {

    // No answer, return to question
    res.redirect('/import-question-page')
  }
})


module.exports = router
