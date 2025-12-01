// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Called when answering question about whether NHS number is known
router.post('/upload-type-answer', (req, res) => {

  // Make a variable and give it the value from 'nhsNumberKnown'
  const WhatTypeofData = req.session.data.WhatTypeofData

  // Check whether the variable matches a condition
  if (WhatTypeofData === 'Reference data') {

    // Send user to a page where they’ll enter their NHS number
    res.redirect('import/import-referencedata-start-page')

  } else if (WhatTypeofData === 'Code') {

    // Send user to a page where they can find their NHS number
    res.redirect('import/import-code-start-page')

  } else {

    // Send user back to the question page
    res.redirect('/import-question-page')

  }
})


module.exports = router
