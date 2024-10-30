import React, { useState } from 'react';

const LandRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    idType: '',
    idNumber: '',

    // Land Information
    landLocation: '',
    district: '',
    chiefdom: '',
    landSize: '',
    landType: '',
    currentLSNumber: '',
    previousLSNumber: '',
    volumeNumber: '',
    pageNumber: '',
    purchaseDate: '',
    
    // Previous Owner Information
    previousOwnerName: '',
    previousOwnerContact: '',
    previousOwnerID: '',
    previousOwnerAddress: '',
    
    // Surveyor Information
    surveyorName: '',
    surveyorLicense: '',
    surveyDate: '',
    surveyPlanNumber: '',
    
    // Lawyer Information
    lawyerName: '',
    lawyerLicense: '',
    
    // Documents
    propertyDocuments: null,
    surveyPlan: null,
    idCard: null,
    previousOwnerDocuments: null,
    
    // Payment Information
    paymentMethod: '',
    amount: '',
    reference: ''
  });

  const landTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'agricultural', label: 'Agricultural' },
    { value: 'industrial', label: 'Industrial' }
  ];

  const districts = [
    "Western Area Urban",
    "Western Area Rural",
    "Bo",
    "Bombali",
    "Bonthe",
    "Falaba",
    "Kailahun",
    "Kambia",
    "Karene",
    "Kenema",
    "Koinadugu",
    "Kono",
    "Moyamba",
    "Port Loko",
    "Pujehun",
    "Tonkolili"
  ];

  const paymentMethods = [
    { value: 'bank', label: 'Bank Transfer' },
    { value: 'mobile', label: 'Mobile Money' },
    { value: 'card', label: 'Credit/Debit Card' }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const renderStep = () => {
    switch(currentStep)