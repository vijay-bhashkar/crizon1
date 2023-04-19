import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { rolesObj } from '../../utils/roles';
import { LEVERFOLLOWUPAdd, SETLEVERFOLLOWUPObj, LEVERFOLLOWUPUpdate } from "../../redux/actions/LeverFollowup/LeverFollowup.actions";
import { LEVERPERDETAILGet } from "../../redux/actions/LeverPerDetail/LeverPerDetail.actions";

export const AddLeverFollowUp = () => {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(LEVERPERDETAILGet());
    },[])

    const leverFolloObj = useSelector((states) => states.leverFollowup.leverfollowupObj);
    const leverPatientList = useSelector((states) => states.leverPerDetail.leverPerDetails);

    const selectPatient = ()=>{

    }

    const [searchParams, setSearchParams] = useSearchParams("edit");
    const [name, setName] = useState("");
    const [enrollDate, setEnrollDate] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [asymptomatic, setAsymptomatic] = useState("");
    const [malaise, setMalaise] = useState("");
    const [fatigue, setFatigue] = useState("");
    const [ruqPain, setRuqPain] = useState("");
    const [pruritus, setPruritus] = useState("");
    const [jaundice, setJaundice] = useState("");
    const [hepatitis, setHepatitis] = useState("");
    const [recurrentFever, setRecurrentFever] = useState("");
    const [priorSurgery, setPriorSurgery] = useState("");
    const [giBleed, setGiBleed] = useState("");
    const [antiviralTherapy, setAntiviralTherapy] = useState("");
    const [drugUsed, setDrugUsed] = useState("");
    const [dentalExposure, setDentalExposure] = useState("");
    const [renalTx, setRenalTx] = useState("");
    const [alcohol, setAlcohol] = useState("");
    const [day, setDay] = useState("");
    const [week, setWeek] = useState("");
    const [years, setYears] = useState("");
    const [familyHistory, setFamilyHistory] = useState("");
    const [weight_2, setWeight_2] = useState("");
    const [height_2, setHeight_2] = useState("");
    const [bmi_2, setBmi_2] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [hbsag, setHbsag] = useState("");
    const [antiLgmHav, setAntiLgmHav] = useState("");
    const [antiLgmHev, setAntiLgmHev] = useState("");
    const [hbvDna, setHbvDna] = useState("");
    const [ana, setAna] = useState("");
    const [ama, setAma] = useState("");
    const [antiHcv, setAntiHcv] = useState("");
    const [antiLkm, setAntiLkm] = useState("");
    const [antiSma, setAntiSma] = useState("");
    const [hcvrna, setHcvrna] = useState("");
    const [tsh, setTsh] = useState("");
    const [bldSugarf, setBldSugarf] = useState("");
    const [cerulopslamin, setCerulopslamin] = useState("");
    const [hiv, setHiv] = useState("");
    const [bldSugarpp, setBldSugarpp] = useState("");
    const [pt, setPt] = useState("");
    const [pti, setPti] = useState("");
    const [inr, setInr] = useState("");
    const [hb, setHb] = useState("");
    const [tlc, setTlc] = useState("");
    const [platelets, setPlatelets] = useState("");
    const [sbil, setSbil] = useState("");
    const [ast, setAst] = useState("");
    const [alt, setAlt] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [globulin, setGlobulin] = useState("");
    const [sap, setSap] = useState("");
    const [ggt, setGgt] = useState("");
    const [bloodUrea, setBloodUrea] = useState("");
    const [creatinine, setCreatinine] = useState("");
    const [ferritin, setFerritin] = useState("");
    const [iron, setIron] = useState("");
    const [tibc, setTibc] = useState("");
    const [copper, setCopper] = useState("");
    const [others, setOthers] = useState("");
    const [triglyceride, setTriglyceride] = useState("");
    const [ldl, setLdl] = useState("");
    const [hdl, setHdl] = useState("");
    const [vldl, setVldl] = useState("");
    const [afp, setAfp] = useState("");
    const [endoscopy, setEndoscopy] = useState("");
    const [usgAbdomen, setUsgAbdomen] = useState("");
    const [fibroscan, setFibroscan] = useState("");
    const [biopsy, setBiopsy] = useState("");
    const [varices, setVarices] = useState("");
    const [grades, setGrades] = useState("");
    const [stomach, setStomach] = useState("");
    const [duodenum, setDuodenum] = useState("");
    const [liverSpan, setLiverSpan] = useState("");
    const [steatosis, setSteatosis] = useState("");
    const [splenomegaly, setSplenomegaly] = useState("");
    const [collaterals, setCollaterals] = useState("");
    const [pvDiameter, setPvDiameter] = useState("");
    const [ascites, setAscites] = useState("");
    const [sol, setSol] = useState("");
    const [cap, setCap] = useState("");
    const [ekpa, setEkpa] = useState("");
    const [hai, setHai] = useState("");
    const [stage, setStage] = useState("");
  
    const handleLeverFollowup = () =>{
        let obj = {
            name  , 
            enrollDate ,
            email ,
            contact ,
            age ,
            gender ,
            height ,
            weight ,
            bmi ,
            asymptomatic ,
            malaise ,
            fatigue ,
            ruqPain ,
            pruritus ,
            jaundice ,
            hepatitis ,
            recurrentFever ,
            priorSurgery , 
            giBleed ,
            antiviralTherapy ,
            drugUsed ,
            dentalExposure ,
            renalTx ,
            alcohol ,
            day ,
            week ,
            years ,
            familyHistory ,
            weight_2 ,
            height_2 ,
            bmi_2 ,
            bloodPressure ,
            hbsag ,
            antiLgmHav ,
            antiLgmHev ,
            hbvDna ,
            ana ,
            ama ,
            antiHcv ,
            antiLkm ,
            antiSma ,
            hcvrna ,
            tsh ,
            bldSugarf ,
            cerulopslamin ,
            hiv ,
            bldSugarpp ,
            pt ,
            pti ,
            inr ,
            hb ,
            tlc ,
            platelets ,
            sbil ,
            ast ,
            alt ,
            albumin ,
            globulin ,
            sap ,
            ggt ,
            bloodUrea ,
            creatinine ,
            ferritin ,
            iron ,
            tibc ,
            copper ,
            others ,
            triglyceride ,
            ldl ,
            hdl ,
            vldl ,
            afp ,
            endoscopy ,
            usgAbdomen ,
            fibroscan ,
            biopsy ,
            varices ,
            grades ,
            stomach ,
            duodenum ,
            liverSpan ,
            steatosis ,
            splenomegaly ,
            collaterals ,
            pvDiameter ,
            ascites ,
            sol ,
            cap ,
            ekpa ,
            hai ,
            stage ,
        }
        if(leverFolloObj?._id){
            dispatch(LEVERFOLLOWUPUpdate(leverFolloObj?._id , obj ));
            toast.success("Lever Followup Updated")
        }else{
            dispatch(LEVERFOLLOWUPAdd(obj));
            toast.success("Lever FollowUp Added ");
        }
        
    }


    useEffect(()=>{
        if(leverFolloObj){
            setName(leverFolloObj?.name);
            setEnrollDate(leverFolloObj?.enrollDate);
            setEmail(leverFolloObj?.email);
            setContact(leverFolloObj?.contact);
            setAge(leverFolloObj?.age);
            setGender(leverFolloObj?.gender);
            setHeight(leverFolloObj?.height);
            setWeight(leverFolloObj?.weight);
            setBmi(leverFolloObj?.bmi);
            setAsymptomatic(leverFolloObj?.asymptomatic);
            setMalaise(leverFolloObj?.malaise);
            setFatigue(leverFolloObj?.fatigue);
            setRuqPain(leverFolloObj?.ruqPain);
            setPruritus(leverFolloObj?.pruritus);
            setJaundice(leverFolloObj?.jaundice);
            setHepatitis(leverFolloObj?.hepatitis);
            setRecurrentFever(leverFolloObj?.recurrentFever);
            setPriorSurgery(leverFolloObj?.priorSurgery);
            setGiBleed(leverFolloObj?.giBleed);
            setAntiviralTherapy(leverFolloObj?.antiviralTherapy);
            setDrugUsed(leverFolloObj?.drugUsed) ;
            setDentalExposure(leverFolloObj?.dentalExposure) ;
            setRenalTx(leverFolloObj?.renalTx) ; 
            setAlcohol(leverFolloObj?.alcohol) ;
            setDay(leverFolloObj?.day) ;
            setWeek(leverFolloObj?.week) ;
            setYears(leverFolloObj?.years) ;
            setFamilyHistory(leverFolloObj?.familyHistory) ;
            setWeight_2(leverFolloObj?.weight_2) ;
            setHeight_2(leverFolloObj?.height_2) ;
            setBmi_2(leverFolloObj?.bmi_2) ;
            setBloodPressure(leverFolloObj?.bloodPressure) ;
            setHbsag(leverFolloObj?.hbsag) ;
            setAntiLgmHav(leverFolloObj?.antiLgmHav) ;
            setAntiLgmHev(leverFolloObj?.antiLgmHev) ;
            setHbvDna(leverFolloObj?.hbvDna) ;
            setAna(leverFolloObj?.ana) ; 
            setAma(leverFolloObj?.ama) ;
            setAntiHcv(leverFolloObj?.antiHcv) ;
            setAntiLkm(leverFolloObj?.antiLkm) ;
            setAntiSma(leverFolloObj?.antiSma) ;
            setHcvrna(leverFolloObj?.hcvrna) ;
            setTsh(leverFolloObj?.tsh) ;
            setBldSugarf(leverFolloObj?.bldSugarf) ;
            setCerulopslamin(leverFolloObj?.cerulopslamin) ;
            setHiv(leverFolloObj?.hiv) ;
            setBldSugarpp(leverFolloObj?.bldSugarpp) ;
            setPt(leverFolloObj?.pt) ;
            setPti(leverFolloObj?.pti) ;
            setInr(leverFolloObj?.inr) ;
            setHb(leverFolloObj?.hb) ;
            setTlc(leverFolloObj?.tlc) ;
            setPlatelets(leverFolloObj?.platelets) ;
            setSbil(leverFolloObj?.sbil) ;
            setAst(leverFolloObj?.ast) ;
            setAlt(leverFolloObj?.alt) ;
            setAlbumin(leverFolloObj?.albumin) ;
            setGlobulin(leverFolloObj?.globulin) ;
            setSap(leverFolloObj?.sap) ;
            setGgt(leverFolloObj?.ggt) ;
            setBloodUrea(leverFolloObj?.bloodUrea) ;
            setCreatinine(leverFolloObj?.creatinine) ;
            setFerritin(leverFolloObj?.ferritin) ;
            setIron(leverFolloObj?.iron) ;
            setTibc(leverFolloObj?.tibc) ;
            setCopper(leverFolloObj?.copper) ;
            setOthers(leverFolloObj?.others) ;
            setTriglyceride(leverFolloObj?.triglyceride) ;
            setLdl(leverFolloObj?.ldl) ;
            setHdl(leverFolloObj?.hdl) ;
            setVldl(leverFolloObj?.vldl) ;
            setAfp(leverFolloObj?.afp) ;
            setEndoscopy(leverFolloObj?.endoscopy) ;
            setUsgAbdomen(leverFolloObj?.usgAbdomen) ;
            setFibroscan(leverFolloObj?.fibroscan) ;
            setBiopsy(leverFolloObj?.biopsy) ;
            setVarices(leverFolloObj?.varices) ;
            setGrades(leverFolloObj?.grades) ;
            setStomach(leverFolloObj?.stomach) ;
            setDuodenum(leverFolloObj?.duodenum) ;
            setLiverSpan(leverFolloObj?.liverSpan) ;
            setSteatosis(leverFolloObj?.steatosis) ;
            setSplenomegaly(leverFolloObj?.splenomegaly) ;
            setCollaterals(leverFolloObj?.collaterals) ;
            setPvDiameter(leverFolloObj?.pvDiameter) ;
            setAscites(leverFolloObj?.ascites) ;
            setSol(leverFolloObj?.sol) ;
            setCap(leverFolloObj?.cap) ;
            setEkpa(leverFolloObj?.ekpa) ;
            setHai(leverFolloObj?.hai) ;
            setStage(leverFolloObj?.stage) ;
        }
    },[leverFolloObj]);

    const genderDrop = [
        { value: "select", label: "Select" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
    ]
    const options = [
        { value: "select", label: "Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];
    const stomachDrop = [
        { label: "select", value: "select" },
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
    ];
    const duodenumDrop = [
        { label: "select", value: "select" },
        { label: "D1", value: "D1" },
        { label: "D2", value: "D2" },
    ]

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <h5 className="mb-0 text-center text-white">
                                Patient (LEVER DISEASE)
                            </h5>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className='btnlist'>
                                <Link to="/LeverFollowUp/viewfollowup" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper_contentbody">
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='row mb-3'>
                                <div className='heaind text-center'>
                                    <h3>Lever Patient Follow Up</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Name <span>*</span></label>
                                            {/* <input type="text" className='form-control'  onChange={(el) => { setName(el.target.value) }} /> */}
                                            <select className='form-control' value={name} onChange={(el) => {setName(el.target.value) }}>
                                                {leverPatientList && leverPatientList.map((el)=><option value={el._id}>{el.name}</option>)}
                                            </select>
                                        </div>
                                        <div className='from-group'>
                                            <label>Email<span>*</span></label>
                                            <input type="email" className='form-control' value={email} onChange={(el) => { setEmail(el.target.value) }} />
                                        </div>

                                        <div className='from-group'>
                                            <label> <span>Age</span></label>
                                            <input type="text" className='form-control' value={age} onChange={(el) => { setAge(el.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Height</span></label>
                                            <input type="text" className='form-control' value={height} onChange={(el) => { setHeight(el.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>B.M.I</span></label>
                                            <input type="text" className='form-control' value={bmi} onChange={(el) => { setBmi(el.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Date of Enrollment<span>*</span></label>
                                            <input type="date" className='form-control' value={enrollDate} onChange={(el) => { setEnrollDate(el.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Contact<span>*</span></label>
                                            <input type="text" className='form-control' maxLength="10" value={contact} onChange={(el) => { setContact(el.target.value) }} />
                                        </div>

                                        <div className='from-group'>
                                            <label>Gender<span>*</span></label>
                                            <select className='form-control' value={gender} onChange={(el) => { setGender(el.target.value) }}>
                                                {genderDrop && genderDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>

                                        <div className='from-group'>
                                            <label> <span>Weight</span></label>
                                            <input type="text" className='form-control' value={weight} onChange={(el) => { setWeight(el.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-12'>
                                <div className='row mb-3'>
                                    <div className='heaind text-center pt-4'>
                                        <h3>Clinical History</h3>
                                    </div>
                                </div>
                                <div className='row addlist-frm'>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='clinical'>
                                            <h5>Clinical Presentation</h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Asymptomatic </label>
                                            <select className='form-control' value={asymptomatic} onChange={(el) => { setAsymptomatic(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Malaise </label>
                                            <select className='form-control' value={malaise} onChange={(el) => { setMalaise(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Fatigue </label>
                                            <select className='form-control' value={fatigue} onChange={(el) => { setFatigue(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>RUQ pain </label>
                                            <select className='form-control' value={ruqPain} onChange={(el) => { setRuqPain(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Pruritus </label>
                                            <select className='form-control' value={pruritus} onChange={(el) => { setPruritus(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Jaundice </label>
                                            <select className='form-control' value={jaundice} onChange={(el) => { setJaundice(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row addlist-frm mt-5'>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='clinical'>
                                            <h5>Past History</h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Viral hepatitis </label>
                                            <select className='form-control' value={hepatitis} onChange={(el) => { setHepatitis(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Recurrent fever </label>
                                            <select className='form-control' value={recurrentFever} onChange={(el) => { setRecurrentFever(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Prior surgery/Blood transfusions</label>
                                            <select className='form-control' value={priorSurgery} onChange={(el) => { setPriorSurgery(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>GI Bleed</label>
                                            <select className='form-control' value={giBleed} onChange={(el) => { setGiBleed(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Antiviral therapy & duration</label>
                                            <select className='form-control' value={antiviralTherapy} onChange={(el) => { setAntiviralTherapy(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Drug used</label>
                                            <select className='form-control' value={drugUsed} onChange={(el) => { setDrugUsed(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Dental exposure</label>
                                            <select className='form-control' value={dentalExposure} onChange={(el) => { setDentalExposure(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Renal tx</label>
                                            <select className='form-control' value={renalTx} onChange={(el) => { setRenalTx(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row addlist-frm mt-5'>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='clinical'>
                                            <h5>H/O Alcohol</h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Alcohol </label>
                                            <select className='form-control' value={alcohol} onChange={(el) => { setAlcohol(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Gm/day </label>
                                            <input type="text" className='form-control' value={day} onChange={(el) => { setDay(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Days/Week </label>
                                            <input type="text" className='form-control' value={week} onChange={(el) => { setWeek(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>No of yrs </label>
                                            <input type="text" className='form-control' value={years} onChange={(el) => { setYears(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Family History </label>
                                            <select className='form-control' value={familyHistory} onChange={(el) => { setFamilyHistory(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row addlist-frm mt-5'>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='clinical'>
                                            <h5>Clinical Features</h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Wt (Kg) </label>
                                            <input type="text" className='form-control' value={weight_2} onChange={(el) => { setWeight_2(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Ht (cm) </label>
                                            <input type="text" className='form-control' value={height_2} onChange={(el) => { setHeight_2(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>BMI (Kg/cm2) </label>
                                            <input type="text" className='form-control' value={bmi_2} onChange={(el) => { setBmi_2(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label> Blood Pressure </label>
                                            <input type="text" className='form-control' value={bloodPressure} onChange={(el) => { setBloodPressure(el.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='row mb-3'>
                                    <div className='heaind text-center'>
                                        <h3>Etiological work up</h3>
                                    </div>
                                </div>
                                <div className='row addlist-frm'>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='clinical'>
                                
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>HBsAg </label>
                                            <input type="date" className="form-control" value={hbsag} onChange={(el) => { setHbsag(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Anti IgM HAV </label>
                                            < input type="date" className="form-control" value={antiLgmHav} onChange={(el) => { setAntiLgmHav(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Anti IgM HEV </label>
                                            < input type="date" className="form-control" value={antiLgmHev} onChange={(el) => { setAntiLgmHev(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>HBV DNA c/ml   </label>
                                            < input type="date" className="form-control" value={hbvDna} onChange={(el) => { setHbvDna(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>ANA  </label>
                                            < input type="date" className="form-control" value={ana} onChange={(el) => { setAna(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>AMA  </label>
                                            < input type="date" className="form-control" value={ama} onChange={(el) => { setAma(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Anti HCV </label>
                                            < input type="date" className="form-control" value={antiHcv} onChange={(el) => { setAntiHcv(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Anti LKM </label>
                                            < input type="date" className="form-control" value={antiLkm} onChange={(el) => { setAntiLkm(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Anti SMA </label>
                                            < input type="date" className="form-control" value={antiSma} onChange={(el) => { setAntiSma(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>HCVRNA  c/ml </label>
                                            < input type="date" className="form-control" value={hcvrna} onChange={(el) => { setHcvrna(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>T3/T4/TSH </label>
                                            < input type="date" className="form-control" value={tsh} onChange={(el) => { setTsh(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Bld Sugar F </label>
                                            < input type="date" className="form-control" value={bldSugarf} onChange={(el) => { setBldSugarf(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>S.Cerulopslamin </label>
                                            < input type="date" className="form-control" value={cerulopslamin} onChange={(el) => { setCerulopslamin(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>HIV </label>
                                            < input type="date" className="form-control" value={hiv} onChange={(el) => { setHiv(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Bld Sugar PP </label>
                                            < input type="date" className="form-control" value={bldSugarpp} onChange={(el) => { setBldSugarpp(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>PT </label>
                                            < input type="date" className="form-control" value={pt} onChange={(el) => { setPt(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>PTI </label>
                                            < input type="date" className="form-control" value={pti} onChange={(el) => { setPti(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>INR </label>
                                            < input type="date" className="form-control" value={inr} onChange={(el) => { setInr(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Hb </label>
                                            < input type="date" className="form-control" value={hb} onChange={(el) => { setHb(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>TLC </label>
                                            < input type="date" className="form-control" value={tlc} onChange={(el) => { setTlc(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Platelets </label>
                                            < input type="date" className="form-control" value={platelets} onChange={(el) => { setPlatelets(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>S.Bil </label>
                                            < input type="date" className="form-control" value={sbil} onChange={(el) => { setSbil(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>AST</label>
                                            < input type="date" className="form-control" value={ast} onChange={(el) => { setAst(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>ALT </label>
                                            < input type="date" className="form-control" value={alt} onChange={(el) => { setAlt(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Albumin</label>
                                            < input type="date" className="form-control" value={albumin} onChange={(el) => { setAlbumin(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Globulin</label>
                                            < input type="date" className="form-control" value={globulin} onChange={(el) => { setGlobulin(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>SAP</label>
                                            < input type="date" className="form-control" value={sap} onChange={(el) => { setSap(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>GGT</label>
                                            < input type="date" className="form-control" value={ggt} onChange={(el) => { setGgt(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Blood Urea </label>
                                            <input type="date" className="form-control" value={bloodUrea} onChange={(el) => { setBloodUrea(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>S creatinine </label>
                                            <input type="date" className="form-control" value={creatinine} onChange={(el) => { setCreatinine(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>S Ferritin </label>
                                            <input type="date" className="form-control" value={ferritin} onChange={(el) => { setFerritin(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>S Iron </label>
                                            <input type="date" className="form-control" value={iron} onChange={(el) => { setIron(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>TIBC</label>
                                            <input type="date" className="form-control" value={tibc} onChange={(el) => { setTibc(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>S Copper </label>
                                            <input type="date" className="form-control" value={copper} onChange={(el) => { setCopper(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Others</label>
                                            <input type="date" className="form-control" value={others} onChange={(el) => { setOthers(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Triglyceride</label>
                                            <input type="date" className="form-control" value={triglyceride} onChange={(el) => { setTriglyceride(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>LDL</label>
                                            <input type="date" className="form-control" value={ldl} onChange={(el) => { setLdl(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label> HDL </label>
                                            <input type="date" className="form-control" value={hdl} onChange={(el) => { setHdl(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>VLDL</label>
                                            <input type="date" className="form-control" value={vldl} onChange={(el) => { setVldl(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>AFP</label>
                                            <input type="date" className="form-control" value={afp} onChange={(el) => { setAfp(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Endoscopy</label>
                                            <input type="date" className="form-control" value={endoscopy} onChange={(el) => { setEndoscopy(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>USG abdomen </label>
                                            <input type="date" className="form-control" value={usgAbdomen} onChange={(el) => { setUsgAbdomen(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Liver Fibroscan </label>
                                            <input type="date" className="form-control" value={fibroscan} onChange={(el) => { setFibroscan(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Liver Biopsy </label>
                                            <input type="date" className="form-control" value={biopsy} onChange={(el) => { setBiopsy(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Varices </label>
                                            <select className="form-control" value={varices} onChange={(el) => { setVarices(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Grades </label>
                                            < input type="text" className="form-control" value={grades} onChange={(el) => { setGrades(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Stomach </label>
                                            <select className="form-control" value={stomach} onChange={(el) => { setStomach(el.target.value) }}>
                                                {stomachDrop && stomachDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Duodenum </label>
                                            <select className="form-control" value={duodenum} onChange={(el) => { setDuodenum(el.target.value) }}>
                                                {duodenumDrop && duodenumDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="from-group" >
                                            <label>Liver span</label>
                                            <input type="text" className="form-control" value={liverSpan} onChange={(el) => { setLiverSpan(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Steatosis </label>
                                            <select className="form-control" value={steatosis} onChange={(el) => { setSteatosis(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Splenomegaly </label>
                                            <select className="form-control" value={splenomegaly} onChange={(el) => { setSplenomegaly(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Collaterals  </label>
                                            <select className="form-control" value={collaterals} onChange={(el) => { setCollaterals(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>PV diameter (CM)  </label>
                                            <input type="text" className="form-control" value={pvDiameter} onChange={(el) => { setPvDiameter(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Ascites  </label>
                                            <select className="form-control" value={ascites} onChange={(el) => { setAscites(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>SOL </label>
                                            <select className="form-control" value={sol} onChange={(el) => { setSol(el.target.value) }}>
                                                {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>CAP </label>
                                            <input type="text" className="form-control" value={cap} onChange={(el) => { setCap(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>E(kPa) </label>
                                            <input type="text" className="form-control" value={ekpa} onChange={(el) => { setEkpa(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>HAI  </label>
                                            <input type="text" className="form-control" value={hai} onChange={(el) => { setHai(el.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label>Stage </label>
                                            <input type="text" className="form-control" value={stage} onChange={(el) => { setStage(el.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-4'>
                        <div className='col-lg-12'>
                            {(leverFolloObj?._id)?
                            <div className='subbtn text-center'>
                                <button className='btn btn-link' onClick={handleLeverFollowup} >Update Follow Up</button>
                            </div>
                           :
                            <div className='subbtn text-center'>
                                <button className='btn btn-link' onClick={handleLeverFollowup} >Add Follow Up</button>
                            </div>
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddLeverFollowUp;