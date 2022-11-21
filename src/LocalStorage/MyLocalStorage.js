import React from "react";

export const saveName = (name) =>
{
    // Névmentés localStorage-ba.
    localStorage.setItem("name", name)
}