import React, { useState } from 'react'
import { Switch } from 'react-native'

interface Props {
    isOn: boolean;
    onChange: (isEnable: boolean) => void
}

export const CustomSwitch = ({isOn, onChange}:Props) => {

    
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    }
    
    return (
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }]}}
        />
    )
}
