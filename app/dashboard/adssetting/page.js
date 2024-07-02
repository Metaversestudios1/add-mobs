"use client";
import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
const Page = () => {
  const selectOptions = [
    { value: "on", label: "On", key: 1 },
    { value: "off", label: "Off", key: 2 },
  ];

  const initialState = {
    adsonoff: "",
    popup: "",
    interstitial_count: "",
    interstitial_tag: "",
    appOpen_tag: "",
    rewarded_tag: "",
    native_top_tag: "",
    native_bottom_tag: "",
    banner_type_tag: "",
    top_type: "",
    bottom_type: "",
    native_btn_type: "",
    start_ads: "",
    Version_Code: "",
    update_link: "",
    start_time: "",
    back_btn_interstitial: "",
    second_btn_opan_ads: "",
    native_top_show: "",
    native_bottom_show: "",
    interstitial_preload: "",
    native_preload: "",
    admob_banner: "",
    admob_interstitial: "",
    admob_open: "",
    admob_native_first: "",
    admob_native_second: "",
    admob_rewarded: "",
    facebok_banner: "",
    facebok_native_first: "",
    facebok_native_second: "",
    facebok_interstitial: "",
    facebok_open: "",
    facebok_rewarded: "",
    btn_1_background: "",
    btn_1_text: "",
    btn_color_start: "",
    btn_color_end: "",
    btn_color_border_start: "",
    btn_color_border_end: "",
    btn_color_gradiant_angle: "",
    btn_color_gradiant_border_angle: "",
    btn_color_text: "",
    btn_border_height: "",
    btn_height: "",
    btn_radius: "",
    qureka_link: "",
  };

  const [adsSetting, setAdsSetting] = useState(initialState);
  const [label, setLabel] = useState('');
  const [fields, setFields] = useState([]);
  const [oldData, setOldData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/setadssetting", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adsSetting),
    });
  };

  const handleAddField = () => {
    if (label) {
      setAdsSetting({
        ...adsSetting,
        [label]: '' // Initialize the newly added field with an empty string
      });
      setFields([...fields, label]);
      setLabel('');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name=="label"){

      setLabel(value);
    }
    setAdsSetting({
      ...adsSetting,
      [name]: value
    });
  };

  const handleRemoveField = (field) => {
    const { [field]: omit, ...rest } = adsSetting;
    setAdsSetting(rest);
    setFields(fields.filter(item => item !== field));
  };

  useEffect(()=>{
    fetchOldData()
  },[])

  const fetchOldData =async ()=>{
    const res = await fetch ("/api/getadssetting")
    const response = await res.json()
    setAdsSetting(response.data[0])
  }

  return (
    <div className={`${style.contentContainer}`}>
      <div className=" my-7 mx-7 text-xl">Home/dashboard/ads setting</div>
      <div className="flex mx-8 my-3">
      <div className=" flex">
          <input
            type="text"
            id="dynamic-field-label"
            name="label"
            value={label}
            onChange={handleChange}
            placeholder="Enter field label"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button type="button" onClick={handleAddField} className="bg-blue-800 rounded-lg mx-2 w-[250px]">
            Add Field
          </button>
          </div>
        </div>
        
      <div className="flex flex-col mx-2  items-center">
        <div className="w-1/2">
          <div className="mt-4">
            <label>Set ads On/Off</label>
            <select
              name="adsonoff"
              value={adsSetting.adsonoff}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">----</option>
              {selectOptions.map((option) => {
                return (
                  <option key={option.key} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-4">
            <label>Pop Up</label>
            <input
              type="text"
              name="popup"
              value={adsSetting.popup}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Interstitial Count</label>
            <input
              type="text"
              name="interstitial_count"
              value={adsSetting.interstitial_count}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Interstitial Tag</label>
            <input
              type="text"
              name="interstitial_tag"
              value={adsSetting.interstitial_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>AppOpen Tag</label>
            <input
              type="text"
              name="appOpen_tag"
              value={adsSetting.appOpen_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Rewarded Tag</label>
            <input
              type="text"
              name="rewarded_tag"
              value={adsSetting.rewarded_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Native Top Tag</label>
            <input
              type="text"
              name="native_top_tag"
              value={adsSetting.native_top_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Native Bottom Tag</label>
            <input
              type="text"
              name="native_bottom_tag"
              value={adsSetting.native_bottom_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Banner Type Tag</label>
            <input
              type="text"
              name="banner_type_tag"
              value={adsSetting.banner_type_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Top Type</label>
            <input
              type="text"
              name="top_type"
              value={adsSetting.top_type}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Bottom Type</label>
            <input
              type="text"
              name="bottom_type"
              value={adsSetting.bottom_type}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Native Btn Type</label>
            <input
              type="text"
              name="native_btn_type"
              value={adsSetting.native_btn_type}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Start ads</label>
            <input
              type="text"
              name="start_ads"
              value={adsSetting.start_ads}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Version_Code</label>
            <input
              type="text"
              name="Version_Code"
              value={adsSetting.Version_Code}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Update Link</label>
            <input
              type="text"
              name="update_link"
              value={adsSetting.update_link}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>start_time</label>
            <input
              type="text"
              name="start_time"
              value={adsSetting.start_time}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Back Btn Interstitial</label>
            <input
              type="text"
              name="back_btn_interstitial"
              value={adsSetting.back_btn_interstitial}
              onChange={handleChange}
              placeholder="true/false"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Second btn open Ads</label>
            <input
              type="text"
              name="second_btn_opan_ads"
              value={adsSetting.second_btn_opan_ads}
              onChange={handleChange}
              placeholder="true/false"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Native top show</label>
            <input
              type="text"
              name="native_top_show"
              value={adsSetting.native_top_show}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Native bottom show</label>
            <input
              type="text"
              name="native_bottom_show"
              value={adsSetting.native_bottom_show}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Interstitial Preload</label>
            <input
              type="text"
              name="interstitial_preload"
              value={adsSetting.interstitial_preload}
              onChange={handleChange}
              placeholder="true/false"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Native preload</label>
            <input
              type="text"
              name="native_preload"
              value={adsSetting.native_preload}
              onChange={handleChange}
              placeholder="true/false"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Admob banner</label>
            <input
              type="text"
              name="admob_banner"
              value={adsSetting.admob_banner}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Admob Interstitial</label>
            <input
              type="text"
              name="admob_interstitial"
              value={adsSetting.admob_interstitial}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Admob open</label>
            <input
              type="text"
              name="admob_open"
              value={adsSetting.admob_open}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Admob native first</label>
            <input
              type="text"
              name="admob_native_first"
              value={adsSetting.admob_native_first}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Admob native second</label>
            <input
              type="text"
              name="admob_native_second"
              value={adsSetting.admob_native_second}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Admob rewarded</label>
            <input
              type="text"
              name="admob_rewarded"
              value={adsSetting.admob_rewarded}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Facebok banner</label>
            <input
              type="text"
              name="facebok_banner"
              value={adsSetting.facebok_banner}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Facebok native first</label>
            <input
              type="text"
              name="facebok_native_first"
              value={adsSetting.facebok_native_first}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Facebok native second</label>
            <input
              type="text"
              name="facebok_native_second"
              value={adsSetting.facebok_native_second}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Facebok interstitial</label>
            <input
              type="text"
              name="facebok_interstitial"
              value={adsSetting.facebok_interstitial}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Facebok open</label>
            <input
              type="text"
              name="facebok_open"
              value={adsSetting.facebok_open}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Facebok rewarded</label>
            <input
              type="text"
              name="facebok_rewarded"
              value={adsSetting.facebok_rewarded}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn 1 background</label>
            <input
              type="text"
              name="btn_1_background"
              value={adsSetting.btn_1_background}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn 1 text</label>
            <input
              type="text"
              name="btn_1_text"
              value={adsSetting.btn_1_text}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>btn_color_start</label>
            <input
              type="text"
              name="btn_color_start"
              value={adsSetting.btn_color_start}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn color end</label>
            <input
              type="text"
              name="btn_color_end"
              value={adsSetting.btn_color_end}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn color border start</label>
            <input
              type="text"
              name="btn_color_border_start"
              value={adsSetting.btn_color_border_start}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn color border end</label>
            <input
              type="text"
              name="btn_color_border_end"
              value={adsSetting.btn_color_border_end}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn color gradiant angle</label>
            <input
              type="text"
              name="btn_color_gradiant_angle"
              value={adsSetting.btn_color_gradiant_angle}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn color gradiant border angle</label>
            <input
              type="text"
              name="btn_color_gradiant_border_angle"
              value={adsSetting.btn_color_gradiant_border_angle}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn color text</label>
            <input
              type="text"
              name="btn_color_text"
              value={adsSetting.btn_color_text}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn border height</label>
            <input
              type="text"
              name="btn_border_height"
              value={adsSetting.btn_border_height}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn height</label>
            <input
              type="text"
              name="btn_height"
              value={adsSetting.btn_height}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label>Btn radius</label>
            <input
              type="text"
              name="btn_radius"
              value={adsSetting.btn_radius}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="form-group mt-4">
            <label htmlFor={field}>{field}</label>
            <div className="flex ">
            <input
              type="text"
              id={field}
              name={field}
              value={adsSetting[field]}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button type="button" onClick={() => handleRemoveField(field)}>Remove</button>
            </div>
          </div>
        ))}
      </form>

          <button
            onClick={handleSubmit}
            className="bg-green-900 rounded-lg py-2 px-3 my-3"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
