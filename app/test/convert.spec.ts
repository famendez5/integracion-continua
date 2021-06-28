import { test, expect } from '@playwright/test';

test('convertir pdf', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.setInputFiles('#file', 'testdata/documento1.docx')
    await page.selectOption('#extension', 'pdf')
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('button:has-text("Convertir")')
    ])

    const failure = await download.failure()
    expect(failure).toBeNull()
})

