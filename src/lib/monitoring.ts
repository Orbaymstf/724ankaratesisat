/**
 * Orbay Studio Control Center Monitoring Utility
 * Sends interaction and lead data to the central management panel.
 */

export type EventType = 'lead' | 'call' | 'whatsapp' | 'view';

interface MonitoringData {
  website: string;
  type: EventType;
  data: Record<string, any>;
  timestamp: string;
}

const CONTROL_CENTER_URL = 'https://orbaystudio.vercel.app/api/monitoring';
const WEBSITE_NAME = '7/24 Ankara Tesisat';

export async function trackEvent(type: EventType, data: Record<string, any> = {}) {
  try {
    const payload: MonitoringData = {
      website: WEBSITE_NAME,
      type,
      data,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(CONTROL_CENTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true, // Mobil tarayıcılarda (Arama/WhatsApp) isteğin yarıda kesilmesini önler
    });

    if (!response.ok) {
      console.warn(`[Monitoring] Failed to send event: ${response.statusText}`);
    }

    return response.ok;
  } catch (error) {
    console.error('[Monitoring] Error tracking event:', error);
    return false;
  }
}
