import { LayoutDashboard, MapPin, Calendar, Tag, Wrench } from "lucide-react";

export const COLORS = ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5"];

export const TABS = [
  { id: "overview", label: "Overview", Icon: LayoutDashboard },
  { id: "geography", label: "Geography", Icon: MapPin },
  { id: "models", label: "Makes & Models", Icon: Tag },
  { id: "timeline", label: "Timeline", Icon: Calendar },
  { id: "utilities", label: "Utilities", Icon: Wrench },
];
