import { Zap, BatteryCharging } from 'lucide-react';

export const Header = () => (
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-bold text-blue-900 flex items-center">
      <BatteryCharging className="w-14 h-14 mr-3 text-[#10b981]" />
      EV Analytics Dashboard
    </h1>
  </div>
);