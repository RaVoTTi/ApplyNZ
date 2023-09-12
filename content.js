

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    var personalDetails = {

        "givenName2": { "id": "ContentPlaceHolder1_personDetails_givenName2Textbox", "value": "" },
        "givenName3": { "id": "ContentPlaceHolder1_personDetails_givenName3Textbox", "value": "" },
        "otherNames": { "id": "ContentPlaceHolder1_personDetails_otherNamesTextBox", "value": "" },
        "title": { "id": "ContentPlaceHolder1_personDetails_titleDropDownList", "value": "" },
        "otherTitle": { "id": "ContentPlaceHolder1_personDetails_otherTitleTextBox", "value": "" },
        "gender": { "id": "ContentPlaceHolder1_personDetails_genderDropDownList", "value": "M" },
        "dateOfBirth": { "id": "ContentPlaceHolder1_personDetails_dateOfBirthDatePicker_DatePicker", "value": "12 August, 2002" },
        "Country": { "id": "ContentPlaceHolder1_personDetails_CountryDropDownList", "value": "13" },
        "streetNumber": { "id": "ContentPlaceHolder1_addressContactDetails_address_streetNumberTextbox", "value": "362" },
        "address1": { "id": "ContentPlaceHolder1_addressContactDetails_address_address1TextBox", "value": "Roca Este" },
        "suburb": { "id": "ContentPlaceHolder1_addressContactDetails_address_suburbTextBox", "value": "Malargue" },
        "city": { "id": "ContentPlaceHolder1_addressContactDetails_address_cityTextBox", "value": "Malargue" },
        "provinceState": { "id": "ContentPlaceHolder1_addressContactDetails_address_provinceStateTextBox", "value": "Mendoza" },
        "postalCode": { "id": "ContentPlaceHolder1_addressContactDetails_address_postalCodeTextBox", "value": "5613" },
        "country": { "id": "ContentPlaceHolder1_addressContactDetails_address_countryDropDownList", "value": "13" },
        "phoneNumber": { "id": "ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberTextBox", "value": "5492604629233" },
        "phoneNumberNight": { "id": "ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberNightTextBox", "value": "" },
        "phoneNumberMobile": { "id": "ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberMobileTextBox", "value": "" },
        "faxNumber": { "id": "ContentPlaceHolder1_addressContactDetails_contactDetails_faxNumberTextbox", "value": "" },
        "emailAddress": { "id": "ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox", "value": "" },
        "representedByAgent": { "id": "ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist", "value": "No" },
        "communicationMethod": { "id": "ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList", "value": "1" },
        "hasCreditCard": { "id": "ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist", "value": "Yes" }
    }

    if (message.action === "PERSONAL_DETAILS") {
        changeValue(personalDetails)

    }

    var identification = {
        "passportNumber": { "id": "ContentPlaceHolder1_identification_passportNumberTextBox", "value": "AAH934967" },
        "confirmPassportNumber": { "id": "ContentPlaceHolder1_identification_confirmPassportNumberTextBox", "value": "AAH934967" },
        "passportExpiryDate": { "id": "ContentPlaceHolder1_identification_passportExpiryDateDatePicker_DatePicker", "value": "13 July, 2032" },
        "otherIdentification": { "id": "ContentPlaceHolder1_identification_otherIdentificationDropdownlist", "value": "3" },
        "otherIssueDate": { "id": "ContentPlaceHolder1_identification_otherIssueDateDatePicker_DatePicker", "value": "15 June, 2017" },
        "otherExpiryDate": { "id": "ContentPlaceHolder1_identification_otherExpiryDateDatePicker_DatePicker", "value": "15 June, 2032" },
        "passportCountry": { "id": "ContentPlaceHolder1_identification_passportCountryDropDownList", "value": "" }

    }

    if (message.action === "IDENTIFICATION") {
        changeValue(identification)


    }

    var occupation = {
        "SearchString": { "id": "ContentPlaceHolder1_generalPersonal_industryControl_optionListSearch_SearchStringTextBox", "value": "B151200 Petroleum Exploration Services" },
        "SearchImageButton": { "id": "ContentPlaceHolder1_generalPersonal_industryControl_optionListSearch_SearchImageButton", "value": "" },
        "SearchString": { "id": "ContentPlaceHolder1_generalPersonal_occupationControl_optionListSearch_SearchStringTextBox", "value": "399212 Gas or Petroleum Operator" },
        "SearchImageButton": { "id": "ContentPlaceHolder1_generalPersonal_occupationControl_optionListSearch_SearchImageButton", "value": "" }
    }
    if (message.action === "OCCUPATION") {
        changeValue(occupation)


    }


    var health = {
        "entryTable": { "id": "ContentPlaceHolder1_entryTable", "value": "No" },
        "renalDialysis": { "id": "ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList", "value": "No" },
        "tuberculosis": { "id": "ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList", "value": "No" },
        "cancer": { "id": "ContentPlaceHolder1_medicalConditions_cancerDropDownList", "value": "No" },
        "heartDisease": { "id": "ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList", "value": "No" },
        "disability": { "id": "ContentPlaceHolder1_medicalConditions_disabilityDropDownList", "value": "No" },
        "hospitalisation": { "id": "ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList", "value": "No" },
        "residentailCare": { "id": "ContentPlaceHolder1_medicalConditions_residentailCareDropDownList", "value": "No" },
        "healthDetails": { "id": "ContentPlaceHolder1_medicalConditions_healthDetailsTextBox", "value": "" },
        "tbRiskAnchor": { "id": "ContentPlaceHolder1_medicalConditions_tbRiskAnchor", "value": "No" },
        "tbRisk": { "id": "ContentPlaceHolder1_medicalConditions_tbRiskDropDownList", "value": "No" }

    }
    if (message.action === "HEALTH") {
        changeValue(health)

    }
    var character = {
        "entryTable": { "id": "ContentPlaceHolder1_entryTable", "value": "No" },
        "imprisonment5Years": { "id": "ContentPlaceHolder1_character_imprisonment5YearsDropDownList", "value": "No" },
        "imprisonment12Months": { "id": "ContentPlaceHolder1_character_imprisonment12MonthsDropDownList", "value": "No" },
        "deported": { "id": "ContentPlaceHolder1_character_deportedDropDownList", "value": "No" },

        "charged": { "id": "ContentPlaceHolder1_character_chargedDropDownList", "value": "No" },
        "convicted": { "id": "ContentPlaceHolder1_character_convictedDropDownList", "value": "No" },
        "underInvestigation": { "id": "ContentPlaceHolder1_character_underInvestigationDropDownList", "value": "No" },
        "excluded": { "id": "ContentPlaceHolder1_character_excludedDropDownList", "value": "No" },
        "removed": { "id": "ContentPlaceHolder1_character_removedDropDownList", "value": "No" },
    }

    if (message.action === "CHARACTER") {
        changeValue(character)

    }
    var whsSpecific = {
        "entryTable": { "id": "ContentPlaceHolder1_entryTable", "value": "No" },
        "previousWhsPermitVisa": { "id": "ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList", "value": "No" },
        "sufficientFundsAnchor": { "id": "ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsAnchor", "value": "Yes" },
        "sufficientFundsHoliday": { "id": "ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList", "value": "Yes" },
        "intendedTravelDate": { "id": "ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker", "value": "1 February, 2024" },
        "intendedTravelDate2": { "id": "ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_DatePicker", "value": "1 February, 2024" },
        "beenToNz": { "id": "ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList", "value": "No" },
        "sufficientFundsOnwardTicket": { "id": "ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList", "value": "Yes" },
        "readRequirements": { "id": "ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList", "value": "Yes" }
    }

    if (message.action === "WHS-SPECIFIC") {
        changeValue(whsSpecific)
    }

});

const changeValue = (json) => {
    Object.keys(json).forEach((field) => {
        let input = document.getElementById(json[field].id);
        if (json[field].value) {
            input.value = json[field].value
        }

    })
}
