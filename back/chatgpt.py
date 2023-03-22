import openai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Note: you need to be using OpenAI Python v0.27.0 for the code below to work
openai.api_key = "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"

@app.route('/api/prompt', methods=['POST'])
def handle_prompt():
    data = request.get_json()
    print(data)
    objective = data['objective']
    age = data['age']
    retirement = data['retirement']
    monthly_investment = data['monthly_investment']
    monthly_income = data['monthly_income']
    employment_status = data['employment_status']
    current_portfolio = data['current_portfolio']
    risk_tolerance = data['risk_tolerance']
    investment_experience = data['investment_experience']
    invested_amount = data['invested_amount']
    investment_horizon = data['investment_horizon']

    prompt = (
        "Generate an investment strategy for someone with the following characteristics:\n"
        f"Investment Objective: {objective}\n"
        f"Age: {age}\n"
        f"Expected Retirement Age: {retirement}\n"
        f"Investment Amount: {monthly_investment}€/month\n"
        f"Income: {monthly_income}€/month\n"
        f"Employment Status: {employment_status}\n"
        f"Current Portfolio: {current_portfolio}\n"
        f"Risk Tolerance: {risk_tolerance}\n"
        f"Investment Experience: {investment_experience}\n"
        f"Invested amount: {invested_amount}€\n"
        f"Investment Horizon: {investment_horizon} years\n"
        "Answer in the following way:\n"
        "1. Investor profile assessment\n"
        "2. Assessment of current portfolio if not empty\n"
        "3. Investment Strategy\n"
        "4. Investment allocation - how much % to which bracket\n"
        "4. Actionable steps - how to invest, how much, each month\n"
        "5. Risk assessment - how much risk is the investor taking\n"
        "6. Investment performance - how much return to expect\n"        
        "Do not add anything else. Reply in Dutch."
    )

    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )

    print(response['choices'][0]['message']['content'])
    return {'response': response['choices'][0]['message']['content']}

if __name__ == '__main__':
    app.run(port=5001)

